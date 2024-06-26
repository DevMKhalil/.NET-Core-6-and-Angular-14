global using HealthCheckAPI.Common;
using HealthCheckAPI;
using Microsoft.AspNetCore.SignalR;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHealthChecks()
//.AddCheck<ICMPHealthCheck>("ICMP");
.AddCheck("ICMP_01",
new ICMPHealthCheck("www.ryadel.com", 100))
.AddCheck("ICMP_02",
new ICMPHealthCheck("www.google.com", 100))
.AddCheck("ICMP_03",
new ICMPHealthCheck($"www.{Guid.NewGuid():N}.com", 100));

builder.Services.AddControllers();
builder.Services.AddSignalR();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


//For CORS Policy Error
app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseHealthChecks(new PathString("/api/health"),
    new CustomHealthCheckOptions());

app.MapHub<HealthCheckHub>("/api/health-hub");

app.MapGet("/api/broadcast/update", async (IHubContext<HealthCheckHub> hub) =>
{
    await hub.Clients.All.SendAsync("Update", "test");
    return Results.Text("Update message sent.");
});

app.MapControllers();

app.Run();
