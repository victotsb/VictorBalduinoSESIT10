namespace marketplace.Models
{
    public class ItemPedido
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty; // Inicializa com uma string vazia
        public decimal Valor { get; set; } = 0m; // Inicializa com um valor decimal padrão
    }
}
