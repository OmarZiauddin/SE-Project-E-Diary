import Homepage from "../components/homepage/Homepage"
import Timetable from "../components/timetable/Timetable"

export const routes = [
  {
    key: "homepage",
    title: "Homepage",
    route: "/",
    auth_required: true,
    component: Homepage,
  },
  {
    key: "timetable",
    title: "Timetable",
    route: "/dashboard/timetable",
    auth_required: true,
    component: Timetable,
  },
]
