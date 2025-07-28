import { Await } from "react-router";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";

import { urlQuery } from "../../queries/urlQuery";

type UrlItemPropTypes = { url: string; displayResolvedItem: Function };

export default function UrlItem({
  url,
  displayResolvedItem,
}: UrlItemPropTypes) {
  const { data: film } = useQuery(urlQuery(url));
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Await
        resolve={film}
        errorElement={<div>Could not load item</div>}
        children={(resolvedItem) => displayResolvedItem(resolvedItem)}
      />
    </Suspense>
  );
}
