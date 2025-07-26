import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/planets.tsx"),
  route(":id", "routes/planet.tsx"),
] satisfies RouteConfig;
