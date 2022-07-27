describe("Create Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/create");
  });

  it("allows the user to create a product", () => {
    cy.get('input[name="name"]').type("Test Product");
    cy.get('input[name="price"]').type("10");
    cy.get('select[name="kind"]').type("Máquina");
    cy.get('textarea[name="description"]').type("Test Description");
    // cy.get('input[type="file"]').attachFile({
    //   fileContent: fileContent.toString(),
    //   fileName: "testPicture.png",
    //   mimeType: "image/png",
    // });
    // cy.get('button[type="submit"]').click();
  });
});
