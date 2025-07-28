import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/PageLayout.tsx", [
    index("routes/planetList.tsx"),
    route(":id", "routes/planetDetails.tsx"),
  ]),
] satisfies RouteConfig;
