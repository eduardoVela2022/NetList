// Imports
using Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

// File path
namespace Infrastructure.Data;

// Database store context
public class StoreContext(DbContextOptions options) : IdentityDbContext<AppUser>(options)
{
    // List items table
    public DbSet<ListItem> ListItems { get; set; }
}
