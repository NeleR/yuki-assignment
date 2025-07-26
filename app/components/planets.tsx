import { Link } from "react-router";

type PlanetsProps = { planets: any[] };

export default function Planets({ planets }: PlanetsProps) {
  return (
    <>
      <h1>Star Wars Planets</h1>
      <p>There are {planets.length} planets available</p>
      <ol>
        {planets.map((planet, index) => (
          <li key={index}>
            <Link to={`/${index}`}>{planet.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
