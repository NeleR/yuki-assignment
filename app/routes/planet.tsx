import type { Route } from "./+types/planet";
import Planet from "../components/Planet";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`https://swapi.info/api/planets/${params.id}`);
  const planet = await res.json();
  return { planet };
}

export default function PlanetRoute({
  params,
  loaderData,
}: Route.ComponentProps) {
  return (
    <>
      <title>Planet {params.id}</title>
      <meta name="description" content="Details of a Star Wars planet" />
      <Planet id={params.id} planet={loaderData.planet} />
    </>
  );
}
