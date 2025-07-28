import { Link } from "react-router";

import type PlanetType from "swapi-typescript/dist/models/Planet.d.ts";
import Card from "../base/Card";
import PlanetListItem from "./PlanetListItem";

type PlanetListProps = { planets: PlanetType[] };

export default function PlanetList({ planets }: PlanetListProps) {
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
                <PlanetListItem planet={planet} />
              </Card>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
