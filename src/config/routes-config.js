import Homepage from "../components/homepage/Homepage"

export const routes = [
  {
    key: "homepage",
    title: "Homepage",
    route: "/",
    auth_required: true,
    component: Homepage,
  },
]
