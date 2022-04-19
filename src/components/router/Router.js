import React from "react"
import { Routes, Route } from "react-router-dom"
import { routes } from "../../config/routes-config"
import RouteWrapper from "./RouteWrapper"
import PageNotFound from "../error_pages/PageNotFound"

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.route}
          element={<RouteWrapper component={route.component} />}
          key={route.key}
        />
      ))}
      <Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Router
