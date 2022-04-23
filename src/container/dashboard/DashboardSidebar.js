import PropTypes from "prop-types"
import { useEffect, useContext } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
// material
import { styled } from "@mui/material/styles"
import { Box, Link, Drawer, Typography, Avatar } from "@mui/material"
// components

import Scrollbar from "../../components/sidebar/Scrollbar"
import NavSection from "../../components/sidebar/NavSection"
import { MHidden } from "../../components/@material-extend"
//
import sidebarConfig from "../../components/sidebar/SidebarConfig"

import UserContext from "../../providers/UserContext"
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}))

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200],
}))

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
}

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation()
  const userContext = useContext(UserContext)
  console.log(userContext)

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar()
    }
  }, [pathname])

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={"image"} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {userContext.user.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {userContext.user.role}
              </Typography>
              {userContext.user.role === "student" ? (
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {`Class ${userContext.user.class}`}
                </Typography>
              ) : (
                <></>
              )}
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  )

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  )
}
