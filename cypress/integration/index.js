describe('Image Difference', () => {
  const PAGE_URL = Cypress.env('FRONTEND_URL')
  const ENDPOINTS = [
    "",
    "contact-us",
    "harmful-plants",
    "health",
    "success-stories",
    "supporters",
  ]

  const fullUrlEndpoints = ENDPOINTS.map(endpoint => `${PAGE_URL}/${endpoint}`)

  fullUrlEndpoints.forEach((currentPageUrl) => {
    const endpoint = currentPageUrl.replace(`${PAGE_URL}/`, "").replace("/", "=")

    it(`Image Difference on 720p Screens - ${endpoint}`, () => {
      // Setting Up
      cy.allure()
      .feature(endpoint)
      .parameter('Endpoint', endpoint)
      cy.visit(currentPageUrl)

      cy.viewport(1280, 720)

      const viewportHeight = Cypress.config("viewportHeight")
      cy.document().then(doc => {
        const scrollHeight = doc.documentElement.offsetHeight
        const numberOfScreenshot = Math.ceil(scrollHeight / viewportHeight)
        for (let index = 0; index < numberOfScreenshot; index++) {
          // Scroll down a viewport Height
          cy.scrollTo(0, viewportHeight * index)
          cy.wait(Math.max(750 * numberOfScreenshot, 10000)) // Wait for a little on scrolling depending on number of pages
          cy.matchImageSnapshot(
            `${endpoint || "Homepage"}/720p/${index + 1}-${numberOfScreenshot}`,
            { capture: "viewport" }
          )
        }
      })
    })
  })
})
