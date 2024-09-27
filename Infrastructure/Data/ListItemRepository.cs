// Imports
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

// File path
namespace Infrastructure.Data;

// List item repo
public class ListItemRepository(StoreContext context) : IListItemRepository
{
    // Gets all list items from database
    public async Task<IReadOnlyList<ListItem>> GetAllListItemsAsync()
    {
        return await context.ListItems.ToListAsync();
    }

    // Adds a list item to the database
    public void AddListItem(ListItem listItem)
    {
        context.ListItems.Add(listItem);
    }

    // Saves changes done to the database
    public async Task<bool> SaveChangesAsync()
    {
        return await context.SaveChangesAsync() > 0;
    }
}
