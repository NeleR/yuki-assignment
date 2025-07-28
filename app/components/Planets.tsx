import { Await, Link } from "react-router";
import { Suspense } from "react";

import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
import PageTitle from "./base/PageTitle";
import Card from "./base/Card";

type PlanetsProps = { planets: PlanetType[] };

export default function Planets({ planets }: PlanetsProps) {
  return (
    <>
      <PageTitle>Star Wars Planets</PageTitle>
      <Suspense fallback={<PlanetListSkeleton />}>
        <Await
          resolve={planets}
          errorElement={<div>Could not load planets</div>}
          children={(resolvedPlanets) => (
            <PlanetList planets={resolvedPlanets} />
          )}
        />
      </Suspense>
    </>
  );
}

function PlanetList({ planets }: PlanetsProps) {
  return (
    <>
      <p className="italic text-sm mb-2">
        Which of {planets.length} planets to explore first?{" "}
      </p>
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

function PlanetListSkeleton() {
  const emptyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <p className="italic text-sm mb-2">Loading planets...</p>
      <ol
        role="status"
        className="animate-pulse grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        {emptyArray.map((_, index) => (
          <li key={index}>
            <Card hoverable={true}>
              <div className="h-6"></div>
            </Card>
          </li>
        ))}
      </ol>
    </>
  );
}
