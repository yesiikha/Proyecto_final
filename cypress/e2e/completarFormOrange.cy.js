describe('Diligenciar una reclamacion de empleados', () => {

  it('diligenciar reclamacion', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Completar credenciales para el Log-in
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    //Dar click en el boton de LOGIN
    cy.get('.orangehrm-login-action').click();

    //Selecciona la opcion de reclamaciones
    cy.get('.oxd-main-menu-item').eq(10).click();

    //Selecciona la opcion de enviar reclamacion
    cy.get('.oxd-topbar-body-nav-tab').eq(1).click();

    //Completa los campos del form
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown > :nth-child(4)').click();
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown > :nth-child(3)').click();  
    
    //Redacta la reclamacion
    cy.get('.oxd-textarea').type('I am writing to express my dissatisfaction with the recent accommodation payment made in Albanian Lek. Despite confirming the currency exchange rates in advance, I was charged an unexpected additional fee. I kindly request a refund or a clarification of the extra charges incurred.');
  
    //Envia la reclamacion
    cy.get('.oxd-button--secondary').click();
    cy.get('.oxd-button--secondary').click();

    //Hace LOGOUT
    cy.get('.oxd-userdropdown-tab').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

  
  })


})