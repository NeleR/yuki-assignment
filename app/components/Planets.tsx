import { Link } from "react-router";

import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";

type PlanetsProps = { planets: PlanetType[] };

export default function Planets({ planets }: PlanetsProps) {
  return (
    <>
      <h1>Star Wars Planets</h1>
      <p>There are {planets.length} planets available</p>
      <ol>
        {planets.map((planet, index) => (
          <li key={index}>
            <Link to={`/${index + 1}`}>{planet.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
