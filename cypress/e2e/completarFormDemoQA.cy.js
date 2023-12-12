describe('Diligeniar formulario', () => {

  it('Completa el formulario', () => {
    cy.visit('https://demoqa.com/automation-practice-form')

    //LLena campos del formulario
    cy.get('#firstName').type('Yessica Viviana');
    cy.get('#lastName').type('León López');
    cy.get('#userEmail').type('yessicaleon@gmail.com');

    //Selecciona el genero
    cy.get('.custom-radio:nth-child(2) > .custom-control-label').click();

    //Ingresa el numero de telefono
    cy.get('#userNumber').type(1234567891);

    //Selecciona la fecha de nacimiento
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2002');
    cy.get('.react-datepicker__month-select').select('December');
    cy.contains('.react-datepicker__day--023','23').click();

    cy.get('#subjectsContainer').type('others');

    //Selecciona los hobbies
    cy.get('.custom-checkbox:nth-child(3) > .custom-control-label').click();

    //Selecciona la imagen y la sube al form
    cy.fixture('imgelefante.jpeg').then(fileContent => {
      const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
    
      const file = new File([blob], 'imgelefante.jpeg', { type: 'image/jpeg' });
    
      cy.get('#uploadPicture').then(subject => {
        const el = subject[0];
        const testFile = new File([fileContent], 'imgelefante.jpeg', { type: 'image/jpeg' });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
    
        el.files = dataTransfer.files;
      });
    });

    //Ingresa la direccion
    cy.get('#currentAddress').type('Carrera 100 #158a-48');

    //Selecciona el estado y la ciudad
    cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-3-option-2').click();

    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-4-option-1').click();
  })

})
