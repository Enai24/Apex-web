describe('Navigation Tests', () => {
  const pages = [
    '/',
    '/about/',
    '/services/',
    '/contact/',
    '/careers/',
    '/industries/',
    '/privacy-policy/',
    '/terms-of-service/',
  ];

  pages.forEach((page) => {
    it(`should load ${page} without errors`, () => {
      cy.visit(page);
      cy.get('body').should('be.visible');
      cy.title().should('not.be.empty');
      cy.contains('404').should('not.exist');
    });
  });

  it('should check all links on the homepage', () => {
    cy.visit('/');
    cy.get('a').each(($link) => {
      const href = $link.attr('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).its('status').should('not.equal', 404);
      }
    });
  });
});
