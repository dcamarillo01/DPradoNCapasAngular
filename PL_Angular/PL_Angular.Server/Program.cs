using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var conString = builder.Configuration.GetConnectionString("DPradoProgramacionNCapas") ??
     throw new InvalidOperationException("Connection string 'DPradoProgramacionNCapas'" +
    " not found.");
builder.Services.AddDbContext<DL.DpradoProgramacionNcapasContext>(options =>
    options.UseSqlServer(conString));

//Usuario
builder.Services.AddScoped<BL.Usuario>();

//Direccion
builder.Services.AddScoped<BL.Estado>();
builder.Services.AddScoped<BL.Municipio>();
builder.Services.AddScoped<BL.Colonia>();

//Empleado
builder.Services.AddScoped<BL.Empleado>();

//UserProfile
builder.Services.AddScoped<BL.UserProfile>();

//Login
builder.Services.AddScoped<BL.Login>();

builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressModelStateInvalidFilter = true;
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy
            .AllowAnyOrigin()   // acepta cualquier origen
            .AllowAnyHeader()   // acepta cualquier header
            .AllowAnyMethod();  // acepta GET, POST, PUT, DELETE, etc.
    });
});


// JWT Configuration 

//Configuracion de JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "yourdomain.com",
            ValidAudience = "yourdomain.com",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("d4c9482eb6bab9aef587ff82afcb000d"))
        };
    });


var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AllowAll");

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
