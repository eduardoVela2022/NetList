// Imports
using Core.Entities;
using Microsoft.EntityFrameworkCore;

// File path
namespace Infrastructure.Data;

// Database store context
public class StoreContext(DbContextOptions options) : DbContext(options)
{
    // List items table
    public DbSet<ListItem> ListItems { get; set; }
}
