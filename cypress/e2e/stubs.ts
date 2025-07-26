export function stubPlanets() {
  cy.intercept("https://swapi.info/api/planets", {
    fixture: "planets.json",
  }).as("planets");
}

export function stubPlanetUtapau() {
  cy.intercept("https://swapi.info/api/planets/12", {
    fixture: "planet-utapau.json",
  }).as("planet");
}
