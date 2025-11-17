namespace ButtonGrid.Models
{
    /*
    * Obadiah Fusco
    * Activety 4
    * CST-350
    * 10/26/25
    */
    public class ButtonModel
    {
        // Model properties
        public int Id { get; set; }
        public int ButtonState { get; set; }
        public string ButtonImage { get; set; }

        public ButtonModel() { }

        public ButtonModel(int id, int buttonState)
        {
            Id = id;
            ButtonState = buttonState;
        }
    }

}
