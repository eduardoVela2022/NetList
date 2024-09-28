// Imports
using API.DTOs;
using Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// File path
namespace API.Controllers;

// Account controller
[ApiController]
[Route("api/[controller]")]
public class AccountController(SignInManager<AppUser> signInManager) : ControllerBase
{
    // api/account/register (POST)
    [HttpPost("register")]
    public async Task<ActionResult> Register(RegisterDto registerDto)
    {
        // New app user entity is created with the register DTO
        var user = new AppUser
        {
            FirstName = registerDto.FirstName,
            LastName = registerDto.LastName,
            Email = registerDto.Email,
            UserName = registerDto.Email,
        };

        // New user is created with a password
        var result = await signInManager.UserManager.CreateAsync(user, registerDto.Password);

        // If user wasn't created successfully, return bad request
        if (!result.Succeeded)
            return BadRequest(result.Errors);

        // Else return ok
        return Ok();
    }

    // api/account/logout (POST)
    [Authorize]
    [HttpPost("logout")]
    public async Task<ActionResult> Logout()
    {
        // Logs out the user
        await signInManager.SignOutAsync();

        // Returns no content response
        return NoContent();
    }

    // api/account (GET)
    [HttpGet]
    public ActionResult GetAuthState()
    {
        // Returns if the user is authenticated or not
        return Ok(new { IsAuthenticated = User.Identity?.IsAuthenticated ?? false });
    }
}
