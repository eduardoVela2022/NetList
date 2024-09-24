var builder = WebApplication.CreateBuilder(args);

// [Services]
// Controller service
builder.Services.AddControllers();

// App is built
var app = builder.Build();

//[Middleware]
// Controller middleware
app.MapControllers();

// App is run
app.Run();
