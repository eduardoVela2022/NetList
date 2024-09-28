// Imports
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// [Services]
// Controller service
builder.Services.AddControllers();

// Database service
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// List item repo service
builder.Services.AddScoped<IListItemRepository, ListItemRepository>();

// CORS service (You may need to restart VS Code)
builder.Services.AddCors();

// Identity framework services
builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<AppUser>().AddEntityFrameworkStores<StoreContext>();

// App is built
var app = builder.Build();

//[Middleware]
// CORS middleware (You may need to restart VS Code)
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:5173"));

// Controller middleware
app.MapControllers();

// Identity framework middleware
app.MapGroup("api").MapIdentityApi<AppUser>();

// App is run
app.Run();
