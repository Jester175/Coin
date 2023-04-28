/// <reference types="cypress"/>

describe("Coin test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/auth");
    cy.get("#login").type("developer");
    cy.get("#password").type("frontend");
    cy.contains("Войти").click();
    cy.get("main").should("have.class", "account__main");
  });

  it("Open account", () => {
    cy.get(".card__btn").eq(0).click();
    cy.get(".accountNumber").should("have.text", "№ 74213041477477406320783754");
  });

  it("Create account", () => {
    cy.get(".accounts").then((e) => {
      const current = e[0].querySelectorAll(".card").length;
      cy.get(".account__btn").click();
      cy.get(`.card:nth-child(${current + 1})`).should("have.class", "card");
    });
  });

  it("Overdrafted", () => {
    cy.get(".card__btn").eq(1).click();
    cy.get(".transfer__otherAccountInput").type("74213041477477406320783754");
    cy.get(".transfer__sumInput").type("1000");
    cy.get(".transfer__btnSend").click();
    cy.get(".modal").should("have.class", "modal__error");
  });

  it("current send", () => {
    cy.get(".accounts").then((e) => {
      const current = e[0].querySelectorAll(".card").length;
      cy.get(".account__btn").click();
      cy.get(`.card:nth-child(${current + 1})`).should("have.class", "card");
      cy.get(".card__btn").eq(current).click();
      cy.get(".transfer__otherAccountInput").type("74213041477477406320783754");
      cy.get(".transfer__sumInput").type("1000");
      cy.get(".transfer__btnSend").click();
      cy.get(".modal").should("have.class", "modal__error");
    });
  });
});
