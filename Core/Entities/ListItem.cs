// File path
namespace Core.Entities;

// List item entity
public class ListItem
{
    // Id
    public int Id { get; set; }

    // Title
    public required string Title { get; set; }

    // Description
    public required string Description { get; set; }
}
