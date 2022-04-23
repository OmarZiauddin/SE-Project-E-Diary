import { Icon } from "@iconify/react"
import scheduleIcon from "@iconify/icons-akar-icons/schedule"

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />

const sidebarConfig = [
  {
    title: "timeTable",
    path: "/dashboard/timetable",
    icon: getIcon(scheduleIcon),
  },
]

export default sidebarConfig
