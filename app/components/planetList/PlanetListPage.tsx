import { Await } from "react-router";
import { Suspense } from "react";
import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";

import PageTitle from "../base/PageTitle";
import PlanetList from "./PlanetList";
import PlanetListSkeleton from "./PlanetListSkeleton";

type PlanetListPageProps = { planets: PlanetType[] };

export default function PlanetListPage({ planets }: PlanetListPageProps) {
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
