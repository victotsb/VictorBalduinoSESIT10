// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    // Método para realizar a operação de soma
    static double Soma(double a, double b)
    {
        return a + b;
    }

    // Método para realizar a operação de subtração
    static double Subtracao(double a, double b)
    {
        return a - b;
    }

    // Método para realizar a operação de multiplicação
    static double Multiplicacao(double a, double b)
    {
        return a * b;
    }

    // Método para realizar a operação de divisão
    static double Divisao(double a, double b)
    {
        if (b == 0)
        {
            Console.WriteLine("Erro! Divisão por zero.");
            return 0;
        }
        else
        {
            return a / b;
        }
    }

    static void Main()
    {
        Console.WriteLine("Escolha o número da operação desejada:");
        Console.WriteLine("1 - Soma");
        Console.WriteLine("2 - Subtração");
        Console.WriteLine("3 - Multiplicação");
        Console.WriteLine("4 - Divisão");

        Console.Write("Digite sua escolha (1/2/3/4): ");
        string escolha = Console.ReadLine();

        // Verifica se a escolha é válida
        if (escolha == "1" || escolha == "2" || escolha == "3" || escolha == "4")
        {
            Console.Write("Digite o primeiro número: ");
            double num1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Digite o segundo número: ");
            double num2 = Convert.ToDouble(Console.ReadLine());

            double resultado = 0;

            // Realiza a operação selecionada
            switch (escolha)
            {
                case "1":
                    resultado = Soma(num1, num2);
                    Console.WriteLine($"{num1} + {num2} = {resultado}");
                    break;
                case "2":
                    resultado = Subtracao(num1, num2);
                    Console.WriteLine($"{num1} - {num2} = {resultado}");
                    break;
                case "3":
                    resultado = Multiplicacao(num1, num2);
                    Console.WriteLine($"{num1} * {num2} = {resultado}");
                    break;
                case "4":
                    resultado = Divisao(num1, num2);
                    if (resultado != 0)
                    {
                        Console.WriteLine($"{num1} / {num2} = {resultado}");
                    }
                    break;
                default:
                    Console.WriteLine("Opção inválida.");
                    break;
            }
        }
        else
        {
            Console.WriteLine("Opção inválida.");
        }

        Console.ReadLine(); // Mantém a janela do console aberta para visualização dos resultados
    }
}
