describe("Language Selection Page Test Cases", () => {
    const url = "https://app.dev.ks.samagra.io/language";
  
    beforeEach(() => {
      cy.visit(url);
    });

    it("TC_LS_01: Should display all 3 language buttons", () => {
        cy.get(':nth-child(1) > .MuiChip-label').should('contain', 'English');
        cy.get(':nth-child(2) > .MuiChip-label').should('exist');
        cy.get(':nth-child(3) > .MuiChip-label').should('exist');
      });

      it("TC_LS_02: Should allow selecting 1 language.", () => {
        cy.get(':nth-child(1) > .MuiChip-label').first().click();
        cy.get('[alt="rightArrow"]').click();
        cy.url().should("include", "/login"); 
      });

      it("TC_LS_03: Should allow only one language to be selected at a time", () => {
        cy.get(':nth-child(1) > .MuiChip-label').eq(0).click();
        cy.get(':nth-child(2) > .MuiChip-label').should('exist').click();        
        // cy.wait('2500');
        cy.get(':nth-child(1) > .MuiChip-label').eq(0).should("not.have.class", "selected");
        // cy.wait('2500');
        cy.get(':nth-child(2) > .MuiChip-label').eq(1).should("have.class", "selected");
      });

      it("TC_LS_04: Selected language button should be highlighted", () => {
        cy.get(':nth-child(1) > .MuiChip-label').first().click().should("have.class", ".css-8a506w > .MuiChip-label");

          
      });
});