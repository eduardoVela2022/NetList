// Imports
using API.DTOs;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// File path
namespace API.Controllers;

// List item controller
[ApiController]
[Route("api/[controller]")]
[Authorize]
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
    public async Task<ActionResult> CreateListItem(ListItemDto listItemDto)
    {
        var listItem = new ListItem
        {
            Title = listItemDto.Title,
            Description = listItemDto.Description,
        };

        // Add list item
        repo.AddListItem(listItem);

        // Save it
        if (await repo.SaveChangesAsync())
        {
            // Return no content response
            return NoContent();
        }

        // Throw a bad request if it wasn't saved
        return BadRequest("An error occured while creating a list item");
    }
}
