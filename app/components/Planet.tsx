import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
import { pick, capitalize, map } from "lodash";

import PageTitle from "./base/PageTitle";

type PlanetPropTypes = { id: string; planet: PlanetType };

export default function Planet({ planet }: PlanetPropTypes) {
  const descriptionItems = pick(planet, [
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population",
  ]);

  return (
    <>
      <PageTitle>{planet.name}</PageTitle>
      <table className="mx-auto table-fixed">
        <caption className="italic text-sm pb-2">Planet details</caption>
        <tbody>
          {map(descriptionItems, (value: string, key: string) => (
            <tr key={key}>
              <th className="p-1 text-left italic pr-2">
                {displayDescriptionLabel(key)}
              </th>
              <td className="p-1 pl-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function displayDescriptionLabel(label: string): string {
  return capitalize(label.replace("_", " "));
}
