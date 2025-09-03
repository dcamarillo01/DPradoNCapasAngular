using Microsoft.EntityFrameworkCore;

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

builder.Services.AddScoped<BL.Usuario>();




var app = builder.Build();

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
