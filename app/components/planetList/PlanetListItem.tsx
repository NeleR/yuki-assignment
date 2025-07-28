import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";

type PlanetListItemPropTypes = { planet: PlanetType };

export default function PlanetListItem({ planet }: PlanetListItemPropTypes) {
  return <p className="text-center">{planet.name}</p>;
}
