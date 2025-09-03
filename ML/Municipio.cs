namespace ML
{
    public class Municipio
    {

        public int IdMunicipio { get; set; }
        public string? Nombre { get; set; }
        public int IdEstado { get; set; }

        public ML.Estado? Estado { get; set; }

        public List<object>? Municipios { get; set; }


    }
}