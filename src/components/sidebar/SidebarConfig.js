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
  // {
  //   title: 'announcemet',
  //   path: '/dashboard/user',
  //   icon: getIcon(multipleUsers),
  //   permission: allPermissions.readUser
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon(shoppingBagFill),
  //   permission: allPermissions.readProduct
  // },
]

export default sidebarConfig
