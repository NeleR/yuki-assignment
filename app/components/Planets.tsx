import { Link } from "react-router";

import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
import PageTitle from "./base/PageTitle";
import Card from "./base/Card";

type PlanetsProps = { planets: PlanetType[] };

export default function Planets({ planets }: PlanetsProps) {
  return (
    <>
      <PageTitle>Star Wars Planets</PageTitle>
      <p>There are {planets.length} planets available</p>
      <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {planets.map((planet, index) => (
          <li key={index}>
            <Link to={`/${index + 1}`}>
              <Card hoverable={true}>
                <p className="text-center">{planet.name}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
