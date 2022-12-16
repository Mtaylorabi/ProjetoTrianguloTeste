describe("Calcular triângulo", () => {
  it("app deve estar online", () => {
    cy.viewport(1440, 900);
    cy.visit("http://localhost:8080/");

    cy.get('[id="calcularTriangulo"]').click();
  })
    
});
