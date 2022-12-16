describe("triangulo", () => {
  it("calcular equilátero", () => {
    cy.visit("/");
    cy.get('input[name="Lado 1"]').type(3);
    cy.get('input[name="Lado 2"]').type(3);
    cy.get('input[name="Lado 3"]').type(3);
    cy.get("button").click();
    cy.get("h").should("have.text", "equilátero");
    cy.get("h").should("have.css", "color", "rgb(255, 165, 0)");
  }),
    it("calcular isósceles", () => {
      cy.reload();
      cy.get('input[name="Lado 1"]').type(3);
      cy.get('input[name="Lado 2"]').type(3);
      cy.get('input[name="Lado 3"]').type(2);
      cy.get("button").click();
      cy.get("h").should("have.text", "isósceles");
      cy.get("h").should("have.css", "color", "rgb(0, 0, 255)");
    }),
    it("calcular escaleno", () => {
      cy.reload();
      cy.get('input[name="Lado 1"]').type(3);
      cy.get('input[name="Lado 2"]').type(2);
      cy.get('input[name="Lado 3"]').type(1);
      cy.get("button").click();
      cy.get("h").should("have.text", "escaleno");
      cy.get("h").should("have.css", "color", "rgb(144, 238, 144)");
    }),
    it("sem valores", () => {
      cy.reload();
      cy.get("button").should("be.disabled");
      cy.get("p").should("have.text", "Esse triângulo é do tipo:");
    }),
    it("digitação de letras", () => {
      cy.reload();
      cy.get('input[name="Lado 1"]').type("A");
      cy.get('input[name="Lado 1"]').should("not.match", /[A]/);
      cy.get("button").should("be.disabled");
      cy.get("p").should("have.text", "Esse triângulo é do tipo:");
    }),
    it("digitação de valores negativo ou zero", () => {
      cy.reload();
      cy.get('input[name="Lado 1"]').type(0);
      cy.get('input[name="Lado 1"]').should("not.match", /[0]/);
      cy.get('input[name="Lado 1"]').type(-1);
      cy.get('input[name="Lado 1"]').should("not.match", /[-1]/);
      cy.get("button").should("be.disabled");
      cy.get("p").should("have.text", "Esse triângulo é do tipo:");
    }),
    it("alteração por letras", () => {
      cy.reload();
      cy.get('input[name="Lado 1"]').type(3);
      cy.get('input[name="Lado 2"]').type(3);
      cy.get('input[name="Lado 3"]').type(3);
      cy.get('input[name="Lado 1"]').type("A");
      cy.get('input[name="Lado 1"]').should("not.match", /[A]/);
    }),
    it("alteração por valores negativos ou zero", () => {
      cy.reload();
      cy.get('input[name="Lado 1"]').type(3);
      cy.get('input[name="Lado 2"]').type(3);
      cy.get('input[name="Lado 3"]').type(3);
      cy.get('input[name="Lado 1"]').clear();
      cy.get('input[name="Lado 1"]').type(0);
      cy.get('input[name="Lado 1"]').should("not.match", /[0]/);
      cy.get('input[name="Lado 2"]').type(-1);
      cy.get('input[name="Lado 2"]').should("not.match", /[-1]/);
    });
});
