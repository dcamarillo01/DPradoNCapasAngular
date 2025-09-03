namespace ML
{
    public class Estado
    {

        public int IdEstado { get; set; }
        public string? Nombre { get; set; }

        public List<object>? Estados { get; set; }

        public ML.Municipio? Municipio { get; set; }

    }
}