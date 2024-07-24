// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    static void Main()
    {
        bool sair = false;

        while (!sair)
        {
            Console.WriteLine("Menu:");
            Console.WriteLine("1 - Opção 1");
            Console.WriteLine("2 - Opção 2");
            Console.WriteLine("3 - Opção 3");
            Console.WriteLine("4 - Sair");

            Console.Write("Escolha uma opção: ");
            string escolha = Console.ReadLine();

            switch (escolha)
            {
                case "1":
                    Console.WriteLine("Você escolheu a Opção 1.");
                    // Aqui você pode adicionar o código correspondente à Opção 1
                    break;
                case "2":
                    Console.WriteLine("Você escolheu a Opção 2.");
                    // Aqui você pode adicionar o código correspondente à Opção 2
                    break;
                case "3":
                    Console.WriteLine("Você escolheu a Opção 3.");
                    // Aqui você pode adicionar o código correspondente à Opção 3
                    break;
                case "4":
                    Console.WriteLine("Saindo...");
                    sair = true;
                    break;
                default:
                    Console.WriteLine("Opção inválida. Escolha novamente.");
                    break;
            }

            Console.WriteLine(); // Adiciona uma linha em branco para separar as interações do menu
        }

        // Pausa para que o usuário veja a mensagem antes de fechar o console
        Console.WriteLine("Pressione qualquer tecla para sair...");
        Console.ReadKey();
    }
}

