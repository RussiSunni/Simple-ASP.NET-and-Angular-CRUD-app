using Microsoft.EntityFrameworkCore.Migrations;

namespace HR.Migrations
{
    public partial class AddEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TelNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Manager = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.ID);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "ce6b7c83-b7b0-4a6e-bddf-883b0ffca76a");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c4823577-96da-4692-879d-837a89eaf5a3",
                column: "ConcurrencyStamp",
                value: "a0fa3f1f-be92-4561-a54e-f1121721cf50");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "fec8fe9f-35e3-4b85-a2b4-029655d3633d",
                column: "PasswordHash",
                value: "AQAAAAEAACcQAAAAEJFLdCfhzRT8Za0D67xDUOOL93dFAE1a8zQUnWw4/wsAZUQN4ujEZvwaPEIG0B7bcw==");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "66880658-9b14-4875-b417-df97017104e4");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c4823577-96da-4692-879d-837a89eaf5a3",
                column: "ConcurrencyStamp",
                value: "3c42a6ab-6403-46f5-8473-1de79a0fb2cd");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "fec8fe9f-35e3-4b85-a2b4-029655d3633d",
                column: "PasswordHash",
                value: "AQAAAAEAACcQAAAAEM1krNLsuKQGGs+LOFwnu/HkIE4jP6FJANhq6GKMCPM0ZKjzvFVFCDKkWmQp/istGQ==");
        }
    }
}
