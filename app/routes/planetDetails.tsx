import { useQuery } from "@tanstack/react-query";
import type { Route } from "./+types/planet";

import PlanetDetailsPage from "../components/planetDetails/PlanetDetailsPage";
import { queryClient } from "../root";
import { planetDetailQuery } from "../queries/planets";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const planet = await queryClient.ensureQueryData(
    planetDetailQuery(params.id),
  );
  return { planet };
}

export default function PlanetDetailsRoute({
  params,
  loaderData,
}: Route.ComponentProps) {
  const { data: planet } = useQuery({
    ...planetDetailQuery(params.id),
    initialData: loaderData.planet,
  });

  return (
    <>
      <title>Planet {params.id}</title>
      <meta name="description" content="Details of a Star Wars planet" />
      <PlanetDetailsPage id={params.id} planet={planet} />
    </>
  );
}
