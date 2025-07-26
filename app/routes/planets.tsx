import type { Route } from "./+types/planets";
import Planets from "../components/planets";

export async function clientLoader() {
  const res = await fetch("https://swapi.info/api/planets");
  const planets = await res.json();
  return { planets };
}

export default function PlanetsRoute({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <title>Planet overview</title>
      <meta name="description" content="Overview of all Star Wars planets" />
      <Planets planets={loaderData.planets} />
    </>
  );
}
