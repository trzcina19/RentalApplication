using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace RentalApplication.Migrations
{
    public partial class SeedingDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Owners (Name,surname,Phone) VALUES ('Jan','Kowalski','123123123')");
            migrationBuilder.Sql("INSERT INTO Owners (Name,surname,Phone) VALUES ('Tomasz','Nowak','123123123')");
            migrationBuilder.Sql("INSERT INTO Owners (Name,surname,Phone) VALUES ('Piotr','Mielcarek','123123123')");

            migrationBuilder.Sql("INSERT INTO Addresses (Street,City) VALUES ('Warszawska','Toruń')");
            migrationBuilder.Sql("INSERT INTO Addresses (Street,City) VALUES ('Kaliska','Turek')");
            migrationBuilder.Sql("INSERT INTO Addresses (Street,City) VALUES ('Łódzka','Kalisz')");

            migrationBuilder.Sql("INSERT INTO Properties (Type, Description, Rooms, Area, Washer, Refrigerator, Iron, AddressId, OwnerId) VALUES (0, 'Opis', 3, 70, 1, 1, 1, 1, 1)");
            migrationBuilder.Sql("INSERT INTO Properties (Type, Description, Rooms, Area, Washer, Refrigerator, Iron, AddressId, OwnerId) VALUES (0, 'Opis1', 5, 160, 1, 0, 0, 2, 2)");
            migrationBuilder.Sql("INSERT INTO Properties (Type, Description, Rooms, Area, Washer, Refrigerator, Iron, AddressId, OwnerId) VALUES (1, 'Opis2', 1, 30, 1, 1, 0, 3, 3)");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Owners");
            migrationBuilder.Sql("DELETE FROM Addresses");
            migrationBuilder.Sql("DELETE FROM Properties");
        }
    }
}
