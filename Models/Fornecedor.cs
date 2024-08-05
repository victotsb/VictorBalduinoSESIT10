namespace marketplace.Models
{
    public class Fornecedor
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty; // Inicializa com uma string vazia
        public string Endereco { get; set; } = string.Empty; // Inicializa com uma string vazia
        public decimal MargemDesconto { get; set; } = 0m; // Inicializa com um valor decimal padrão
        public string RegimeFiscal { get; set; } = string.Empty; // Inicializa com uma string vazia
        public string CNPJ { get; set; } = string.Empty; // Inicializa com uma string vazia
    }
}
