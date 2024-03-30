describe("search products", () => {
  it("Should be able to search for a product and add it to the cart", () => {
    cy.searchByQuery("moletom");

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    cy.get('a[href^="/product"]').should("exist");
  });

  it("Should not be able to visite search page without a search quey", () => {
    cy.on("uncaught:exception", (err) => {
      return false;
    });

    cy.visit("/search");

    cy.location("pathname").should("equal", "/");
  });
});
