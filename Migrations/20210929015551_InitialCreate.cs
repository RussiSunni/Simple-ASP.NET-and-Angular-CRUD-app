using Microsoft.EntityFrameworkCore.Migrations;

namespace HR.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Manager = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.ID);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                column: "ConcurrencyStamp",
                value: "f549cebb-3b80-44e5-90c8-aef4be998e29");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c4823577-96da-4692-879d-837a89eaf5a3",
                column: "ConcurrencyStamp",
                value: "ac32edd7-f405-4f6e-8692-d976239f7738");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "fec8fe9f-35e3-4b85-a2b4-029655d3633d",
                column: "PasswordHash",
                value: "AQAAAAEAACcQAAAAEHk/llFrfryr0R6l9B+ZLv2U6sGIletmZ2Bi82LXDUbFc/emxNQj1kcMiyUXl88+kQ==");
        }
    }
}
