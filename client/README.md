Console commands:

Dotnet:

- dotnet new list (View templates)
- dotnet new sln (Create new .net solution)
- dotnet new webapi -o API -controllers (Create a new .net webapi with controllers)
- dotnet new class lib -o Core (Create a new .net class library)
- dotnet sln add API (Add project to sln, this is done for webapis and class libraries) - dotnet add reference ../Infrastructure (This is done in the API folder to add a reference, since the API project depends on the Infrastructure one)
- dotnet restore (Register projects in sln file)
- dotnet build (builds app) - dotnet watch (runs the app, must be done in an API)
- dotnet new gitignore (Creates a .gitignorefile)

Entity Framework:

- dotnet tool install --global dotnet-ef --version 8.0.8 (To install EF)
  (Add migration)
- dotnet ef migrations add InitialCreate -s API -p Infrastructure
  (Delete migration )
- dotnet ef migrations remove -s API -p Infrastructure
- dotnet ef database update -s API -p Infrastructure (Creates a database and applies a migration)
- dotnet ef database drop -p Infrastructure -s API (Drops a database)

Identity framework:

- (When added add nugget packages and create a new migration to update DB)

Docker:

- docker compose up -d (to create the docker MS SQL server)
- docker compose down (Deletes the containers)

Nuget packages:

- Microsoft.entityframeworkcore.sqlserver => infrastructure folder for database
- Microsoft.entityframeworkcore.design => api folder for migrations
- Microsoft.Extensions.Identity.Stores => core folder for identity framework
- Microsoft.AspNetCore.Identity.EntityFrameworkCore => core folder for identity framework

SQL server tool

- To add a connection use the information of the appsettings.Developer.json. (In there all that info is specified)

Angular

- npm install -g @angular/cli (Install angular)
- ng new client (Creates new angular project)
- ng serve (starts application)
- ng add @angular/material (Install angular component library)
- https://tailwindcss.com/docs/guides/angular (Install tailwind)
- ng g c layout/header —skip-tests (Creates a angular component)
- ng g s core/service/shop —dry-run (Creates a angular service)
- ng g interceptor (Creates a angular http interceptor)
- ng g environments (Creates environment variables)
- ng g g (Creates a route guard)
- ng g p (Creates a pipe)

HTTPS Cert:
Download mkcert package with home-brew

- mkcert -install (Install mkcert in your project)
- mkcert localhost (Create local certificate)

Stripe:

- Get the stripe package for the api

- Get the npm i @stripe/stripe-js for the client
