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

export function stubFilms() {
  // the planet stubs only contians films 1 and 2
  cy.intercept("https://swapi.info/api/films/1", {
    fixture: "film-1.json",
  });
  cy.intercept("https://swapi.info/api/films/2", {
    fixture: "film-2.json",
  });
}
