namespace ML
{
    public class Colonia
    {

        public int? IdColonia { get; set; }
        public string? Nombre { get; set; }

        public int CodigoPostal { get; set; }

        public ML.Municipio? Municipio { get; set; }
        public List<object>? Colonias { get; set; }

    }
}