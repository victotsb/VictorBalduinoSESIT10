namespace marketplace.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty; // Inicializa com uma string vazia
        public string CPF { get; set; } = string.Empty; // Inicializa com uma string vazia
        public string Endereco { get; set; } = string.Empty; // Inicializa com uma string vazia
        public string Telefone { get; set; } = string.Empty; // Inicializa com uma string vazia
        public string Email { get; set; } = string.Empty; // Inicializa com uma string vazia
    }
}
