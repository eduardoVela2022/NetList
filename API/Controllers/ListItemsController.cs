// Imports
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

// File path
namespace API.Controllers;

// List item controller
[ApiController]
[Route("api/[controller]")]
public class ListItemsController(IListItemRepository repo) : ControllerBase
{
    // api/listitems (GET)
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<ListItem>>> GetListItems()
    {
        // Return all list items
        return Ok(await repo.GetAllListItemsAsync());
    }

    // api/listitems (POST)
    [HttpPost]
    public async Task<ActionResult> CreateListItem(ListItem listItem)
    {
        // Add list item
        repo.AddListItem(listItem);

        // Save it
        if (await repo.SaveChangesAsync())
        {
            // Return empty response
            return NoContent();
        }

        // Throw error is it wasn't saved
        return BadRequest("An error occured while creating a list item");
    }
}
