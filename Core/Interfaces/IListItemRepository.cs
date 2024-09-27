// Imports
using Core.Entities;

// File path
namespace Core.Interfaces;

// List item repo interface
public interface IListItemRepository
{
    // Gets all list items from database
    Task<IReadOnlyList<ListItem>> GetAllListItemsAsync();

    // Adds a list item to the database
    void AddListItem(ListItem listItem);

    // Saves changes done to the database
    Task<bool> SaveChangesAsync();
}
