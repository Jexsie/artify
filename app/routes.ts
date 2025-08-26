import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/landing-layout.tsx", [
    index("routes/home.tsx"),
    route("explore", "routes/explore.tsx"),
  ]),
  ...prefix("dashboard", [
    layout("./layouts/dashboard-layout.tsx", [index("routes/dashboard.tsx")]),
  ]),
] satisfies RouteConfig;
