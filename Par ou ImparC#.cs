// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    static void Main()
    {
        Console.Write("Digite um número inteiro: ");
        int numero = Convert.ToInt32(Console.ReadLine());

        if (numero % 2 == 0)
        {
            Console.WriteLine($"{numero} é um número PAR.");
        }
        else
        {
            Console.WriteLine($"{numero} é um número ÍMPAR.");
        }

        // Pausa para que o usuário veja o resultado antes de fechar o console
        Console.WriteLine("Pressione qualquer tecla para sair...");
        Console.ReadKey();
    }
}
