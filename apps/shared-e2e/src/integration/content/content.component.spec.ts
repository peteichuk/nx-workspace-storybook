describe('shared', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contentcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-workspace-name-content').should('exist');
  });
});
