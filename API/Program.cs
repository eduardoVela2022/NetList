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

// Identity framework services
builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<AppUser>().AddEntityFrameworkStores<StoreContext>();

// App is built
var app = builder.Build();

//[Middleware]
// Controller middleware
app.MapControllers();

// Identity framework middleware
app.MapGroup("api").MapIdentityApi<AppUser>();

// App is run
app.Run();
