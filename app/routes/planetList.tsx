import { useQuery } from "@tanstack/react-query";
import type { Route } from "./+types/planets";

import { queryClient } from "../root";
import { planetsQuery } from "../queries/planets";
import PlanetListPage from "../components/planetList/PlanetListPage";

export async function clientLoader() {
  const planets = queryClient.ensureQueryData(planetsQuery());
  return { planets };
}

export default function PlanetListRoute({ loaderData }: Route.ComponentProps) {
  const { data: planets } = useQuery({
    ...planetsQuery(),
    initialData: loaderData.planets,
  });

  return (
    <>
      <title>Planet overview</title>
      <meta name="description" content="Overview of all Star Wars planets" />
      <PlanetListPage planets={planets} />
    </>
  );
}
