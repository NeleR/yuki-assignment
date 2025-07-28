import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
import type FilmType from "swapi-typescript/dist/models/Film.d.ts";
import type ResidentType from "swapi-typescript/dist/models/People.d.ts";

import { pick, capitalize, map, isArray } from "lodash";
import type { ReactElement } from "react";
import { Link } from "react-router";

import PageTitle from "../base/PageTitle";
import UrlItem from "../base/UrlItem";

type PlanetDetailsPagePropTypes = { id: string; planet: PlanetType };

export default function PlanetDetailsPage({
  planet,
}: PlanetDetailsPagePropTypes) {
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
    "films",
    "residents",
  ]);

  return (
    <>
      <PageTitle>{planet.name}</PageTitle>
      <table className="mx-auto table-fixed">
        <caption className="italic text-sm mb-2">Planet details</caption>
        <tbody>
          {map(descriptionItems, (value: string, key: string) => (
            <tr key={key}>
              <th className="align-top p-1 text-left italic pr-2">
                {displayDescriptionLabel(key)}
              </th>
              <td className="align-top p-1 pl-2">
                {displayDescriptionValue(value, key)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/"}>
        <div className="italic underline text-sm mt-8 text-center">
          Explore other planets
        </div>
      </Link>
    </>
  );
}

function displayDescriptionLabel(label: string): string {
  return capitalize(label.replace("_", " "));
}

function displayDescriptionValue(value: string | string[], key: string) {
  if (!isArray(value)) return value;
  if (key === "films" && value?.length > 0) {
    return displayDescriptionValueArray(value, (film: FilmType) => film?.title);
  }
  if (key === "residents" && value?.length > 0) {
    return displayDescriptionValueArray(
      value,
      (resident: ResidentType) => resident?.name,
    );
  }
}

function displayDescriptionValueArray(
  values: string[],
  displayResolvedItem: Function,
): ReactElement<any, any> {
  return (
    <ol className="inline-flex flex-wrap gap-1">
      {values.map((url, index) => (
        <li key={index} className="inline">
          <UrlItem url={url} displayResolvedItem={displayResolvedItem} />,
        </li>
      ))}
    </ol>
  );
}
