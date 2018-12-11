const baseURL = 'http://vuecoursestest.herokuapp.com'
describe("Course page", () => {

  before(() => {
    cy.visit("/");
    cy.get('.navbar-nav:nth-child(1)').
    find('.nav-item:nth-child(3)').click()
  })

  it("allows a course to be submitted", () => {
    // Fill out web form
    cy.get('.course-title').type('Computer Networks')
    cy.get('.class-hours').type('40')
    cy.get('.students-number').type('70')
    cy.get('#studentCategory').select('postgraduate')
    cy.get('.teacher-name').type('James')
    cy.get('#teacherType').select('admin')
    cy.get('.personal-msg').type('I am best')
    cy.get('.make-course').click()
  })
})