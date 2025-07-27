import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/PageLayout.tsx", [
    index("routes/planets.tsx"),
    route(":id", "routes/planet.tsx"),
  ]),
] satisfies RouteConfig;
