namespace HelloWebApp.Models
{
    public class TodoItem
    {
        public string Task { get; set; } = string.Empty; // Default to an empty string
        public bool IsCompleted { get; set; }
    }
}
