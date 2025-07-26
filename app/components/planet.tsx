import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
type PlanetPropTypes = { id: string; planet: { name: PlanetType } };

export default function Planet({ id, planet }: PlanetPropTypes) {
  return `I am planet ${planet.name} (${id})`;
}
