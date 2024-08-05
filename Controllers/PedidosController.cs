using Microsoft.AspNetCore.Mvc;
using marketplace.Data;
using marketplace.Models;
using System.Linq;

namespace marketplace.Controllers
{
    public class PedidosController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PedidosController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var pedidos = _context.Pedidos.ToList();
            return View(pedidos);
        }

        public IActionResult Details(int id)
        {
            var pedido = _context.Pedidos
                .FirstOrDefault(p => p.Id == id);
            if (pedido == null)
            {
                return NotFound();
            }

            return View(pedido);
        }
    }
}
