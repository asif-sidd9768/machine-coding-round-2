import { NavLink, useLocation } from "react-router-dom"

import "./Header.css"

export const Header = () => {
  const location = useLocation()
  return (
    <div className="header-container">
      <NavLink to={`${location.pathname === "/archive" ? '/' : `/archive`}`} className="header-item">
          {`${location.pathname === "/archive" ? "Back to Home" : "Show Archive"} `}
      </NavLink>
    </div>
  )
}