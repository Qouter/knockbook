describe("Navigation", () => {
  it("should navigate to main page", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Products");
  });

  it("should navigate to the create page", () => {
    cy.visit("http://localhost:3000/create");
    cy.get("h1").contains("Create");
  });

  it("should navigate to the market page", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("h1").contains("Market");
  });

  it("should navigate to the profile page", () => {
    cy.visit("http://localhost:3000/profile");
    cy.get("h1").contains("Profile");
  });
});
