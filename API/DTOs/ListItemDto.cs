// Imports
using System.ComponentModel.DataAnnotations;

// File path
namespace API.DTOs;

// List item DTO
public class ListItemDto
{
    // Title
    [Required]
    public string Title { get; set; } = string.Empty;

    // Description
    [Required]
    public string Description { get; set; } = string.Empty;
}
