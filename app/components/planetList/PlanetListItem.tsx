import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
import type FilmType from "swapi-typescript/dist/models/Film.d.ts";

import UrlItem from "../base/UrlItem";
import Pill from "../base/Pill";

type PlanetListItemPropTypes = { planet: PlanetType };

export default function PlanetListItem({ planet }: PlanetListItemPropTypes) {
  function displayFilm(film: FilmType) {
    return film?.title;
  }
  return (
    <>
      <h2 className="text-center text-lg">{planet.name}</h2>
      {planet.films?.length > 0 && (
        <>
          <p id="film-list-label" className="text-sm pt-3">
            {planet.films?.length === 1
              ? "Featured in the film"
              : "Featured in the films"}
          </p>
          <ol aria-labelledby="film-list-label" className="text-sm inline-flex flex-wrap gap-1">
            {planet.films.map((filmUrl, index) => (
              <li key={index} className="inline">
                <Pill>
                  <UrlItem url={filmUrl} displayResolvedItem={displayFilm} />
                </Pill>
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  );
}
