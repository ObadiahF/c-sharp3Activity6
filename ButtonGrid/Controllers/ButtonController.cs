using ButtonGrid.Models;
using Microsoft.AspNetCore.Mvc;

namespace ButtonGrid.Controllers
{
    /*
     * Obadiah Fusco
     * Activety 4
     * CST-350
     * 10/26/25
     */
    public class ButtonController : Controller
    {
        // list of buttons
        static List<ButtonModel> buttons = new List<ButtonModel>();

        Random random = new Random();
        const int GridSize = 25;
        public IActionResult Index()
        {
            buttons = new List<ButtonModel>();
            for (int i = 0; i < GridSize; i++)
            {
                buttons.Add(new ButtonModel(i, random.Next(4)));
            }
            return View("Index", buttons);
        }

        /// <summary>
        /// From button grid
        /// </summary>
        /// <param name="buttonNumber"></param>
        /// <returns></returns>
        public IActionResult HandlePartialPageButtonClick(string buttonNumber)
        {
            if (int.TryParse(buttonNumber, out int buttonValue))
            {
                buttons.ElementAt(buttonValue).ButtonState = (buttons.ElementAt(buttonValue).ButtonState + 1) % 4;
            }
            return PartialView("_OneButton", buttons[buttonValue]);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="buttonId"></param>
        /// <returns></returns>
        public IActionResult GetRightClickModal(string buttonId)
        {
            int.TryParse(buttonId, out int buttonVal);
            return PartialView("_ButtonModal", buttons[buttonVal]);
        }
    }
}
