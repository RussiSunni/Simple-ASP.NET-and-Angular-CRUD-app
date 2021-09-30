using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HR.Data
{
    public class DataContext : IdentityDbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(
            new IdentityRole
            {
                Id = "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                Name = "HR Administrator",
                NormalizedName = "HR Administrator"
            },
            new IdentityRole
            {
                Id = "c4823577-96da-4692-879d-837a89eaf5a3",
                Name = "Employee",
                NormalizedName = "Employee"
            });

            builder.Entity<IdentityUser>(u =>
            {
                u.HasData(new
                {
                    Id = "fec8fe9f-35e3-4b85-a2b4-029655d3633d",
                    AccessFailedCount = 0,
                    Email = "hradmin@test.com",
                    EmailConfirmed = true,
                    FullNames = "HR Administrator",
                    IsActive = true,
                    LockoutEnabled = false,
                    NormalizedEmail = "hradmin@test.com",
                    NormalizedUserName = "hradmin@test.com",
                    PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, "TestPass1234"),
                    UserName = "hradmin@test.com",
                    PhoneNumberConfirmed = true,
                    TwoFactorEnabled = false
                });

                builder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
                {
                    RoleId = "a18be9c0-aa65-4af8-bd17-00bd9344e575",
                    UserId = "fec8fe9f-35e3-4b85-a2b4-029655d3633d"
                });
            });
        }
    }
}