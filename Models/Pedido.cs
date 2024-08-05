using marketplace.Models;
using System;
using System.Collections.Generic;

namespace marketplace.Models
{
    public class Pedido
    {
        public int Id { get; set; }
        public DateTime DataEntrega { get; set; }
        public string Status { get; set; } = string.Empty; // Inicializa com uma string vazia
        public string Responsavel { get; set; } = string.Empty; // Inicializa com uma string vazia
        public Cliente Cliente { get; set; } = new Cliente(); // Inicializa com uma nova instância de Cliente
        public List<ItemPedido> Itens { get; set; } = new List<ItemPedido>(); // Inicializa com uma lista vazia
        public Fornecedor Fornecedor { get; set; } = new Fornecedor(); // Inicializa com uma nova instância de Fornecedor
    }
}

