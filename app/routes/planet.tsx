import type { Route } from "./+types/planet";
import Planet from "../components/planet";

export default function PlanetRoute({ params }: Route.ComponentProps) {
  return (
    <>
      <title>Planet {params.id}</title>
      <meta name="description" content="Details of a Star Wars planet" />
      <Planet id={params.id} />
    </>
  );
}
