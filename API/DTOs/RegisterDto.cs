// Imports
using System.ComponentModel.DataAnnotations;

// File path
namespace API.DTOs;

// Register DTO
public class RegisterDto
{
    // First name
    [Required]
    public string FirstName { get; set; } = string.Empty;

    // Last name
    [Required]
    public string LastName { get; set; } = string.Empty;

    // Email
    [Required]
    public string Email { get; set; } = string.Empty;

    // Password
    [Required]
    public string Password { get; set; } = string.Empty;
}
