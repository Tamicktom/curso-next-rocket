describe("add product to cart", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Cart (1 item)").should("exist");
  });

  it("Should add count duplicated products on cart", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Cart (2 items)").should("exist");
  });

  it("Should be able to search for a product and add it to the cart", () => {
    cy.visit("http://localhost:3000");

    cy.get("input[name=q]").type("moletom").parent("form").submit();

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Cart (1 item)").should("exist");
  });
});
