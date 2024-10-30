# Use .NET 8.0 SDK for build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["HelloWebApp.csproj", "./"]
RUN dotnet restore "./HelloWebApp.csproj"
COPY . .
RUN dotnet publish "HelloWebApp.csproj" -c Release -o /app/publish

# Use .NET 8.0 runtime for final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "HelloWebApp.dll"]

