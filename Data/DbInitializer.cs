using marketplace.Models;
using System;
using System.Linq;
using System.Collections.Generic;

namespace marketplace.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Pedidos.Any())
            {
                return; // O banco de dados já contém pedidos
            }

            var fornecedor = new Fornecedor
            {
                Nome = "Dell Computadores Ltda",
                Endereco = "Avenida Exemplo, 456, São Paulo, SP",
                MargemDesconto = 10,
                RegimeFiscal = "Lucro Real",
                CNPJ = "12.345.678/0001-90"
            };

            var cliente = new Cliente
            {
                Nome = "Maria Souza",
                CPF = "123.456.789-00",
                Endereco = "Rua Exemplo, 123, São Paulo, SP",
                Telefone = "(11) 98765-4321",
                Email = "maria.souza@example.com"
            };

            var pedido = new Pedido
            {
                Id = 12345,
                DataEntrega = new DateTime(2023, 8, 10),
                Status = "Enviado",
                Responsavel = "João da Silva",
                Cliente = cliente,
                Fornecedor = fornecedor,
                Itens = new List<ItemPedido> // Corrigido para `Itens`
                {
                    new ItemPedido
                    {
                        Nome = "Notebook Dell Inspiron 15 3000",
                        Valor = 3500
                    }
                }
            };

            context.Fornecedores.Add(fornecedor);
            context.Clientes.Add(cliente);
            context.Pedidos.Add(pedido);
            context.SaveChanges();
        }
    }
}
