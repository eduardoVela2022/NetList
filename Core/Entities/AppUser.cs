// Imports
using Microsoft.AspNetCore.Identity;

// File path
namespace Core.Entities;

// App user entity
public class AppUser : IdentityUser
{
    // First name
    public string? FirstName { get; set; }

    // Last name
    public string? LastName { get; set; }
}
