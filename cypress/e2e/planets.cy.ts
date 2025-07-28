import { stubPlanets, stubPlanetUtapau, stubFilms } from "./stubs";

describe("Planets overview", () => {
  before(() => {
    // Disable Cypress uncaught exception failures from React hydration errors
    // https://github.com/cypress-io/cypress/issues/27204
    Cypress.on("uncaught:exception", (err) => {
      if (
        err.message.includes(
          "Hydration failed because the server rendered HTML didn't match the client.",
        )
      ) {
        return false;
      }
      // Enable uncaught exception failures for other errors
    });
  });

  beforeEach(() => {
    stubPlanets();
    stubFilms();
  });

  it("lists all planets", () => {
    givenThePlanetOverviewPageIsLoaded();
    then60PlanetsAreDisplayed();
  });

  it("shows films that relate to a planet", () => {
    givenThePlanetOverviewPageIsLoaded();
    thenTheFilmsForAPlanetAreDisplayed("Hoth", "The Empire Strikes Back");
  });

  it("navigates to planet details page", () => {
    stubPlanetUtapau();
    givenThePlanetOverviewPageIsLoaded();
    whenIClickPlanet("Utapau");
    thenINavigateToPlanetDetailPage("12");
  });

  after(() => {
    // Re-enable Cypress uncaught exception failures from React hydration errors
    Cypress.on("uncaught:exception", () => {});
  });
});

function givenThePlanetOverviewPageIsLoaded() {
  cy.visit("/");
  cy.contains("Loading");
  cy.wait("@planets");
  cy.contains("Star Wars Planets");
}

function then60PlanetsAreDisplayed() {
  cy.contains("Star Wars Planets");
  cy.contains(60);
  cy.get("ol").eq(0).children().should("have.length", 60);
}

function whenIClickPlanet(planetName: string) {
  cy.contains(planetName).click();
}

function thenINavigateToPlanetDetailPage(planetId: string) {
  cy.url().should("include", `/${planetId}`);
}

function thenTheFilmsForAPlanetAreDisplayed(
  planetName: string,
  filmName: string,
) {
  cy.contains(planetName)
    .parent()
    .within(() => {
      cy.contains(filmName);
    });
}
