import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
import PageTitle from "./base/PageTitle";

type PlanetPropTypes = { id: string; planet: PlanetType };

export default function Planet({ planet }: PlanetPropTypes) {
  return <PageTitle>{planet.name}</PageTitle>;
}
