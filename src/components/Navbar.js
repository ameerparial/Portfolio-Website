import { useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav className="navbar flex-nowrap container ps-3">
        <div className="d-md-flex d-none  align-items-center">
          <span>Hamza</span>
          <span style={{ color: "#18ca87" }}>.</span>
        </div>

        <ul className={`tnavbar  ${clicked ? "" : "active"}`}>
          <div
            className="d-sm-none icon p-3"
            onClick={() => setClicked(!clicked)}
          >
            <i className={"fas fa-times"}></i>
          </div>
          <li
            className="nav-item"
            onClick={() => {
              setClicked(false);
            }}
          >
            <NavLink
              to="/"
              className={`nav-link ${pathname === "/" ? "mactive-link" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setClicked(false);
            }}
          >
            <NavLink
              to="/work"
              className={`nav-link ${
                pathname === "/work" ? "mactive-link" : ""
              }`}
            >
              Work
            </NavLink>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setClicked(false);
            }}
          >
            <NavLink
              to="/about"
              className={`nav-link ${
                pathname === "/about" ? "mactive-link" : ""
              }`}
            >
              About
            </NavLink>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setClicked(false);
            }}
          >
            <NavLink
              to="/certificate"
              className={`nav-link ${
                pathname === "/certificate" ? "mactive-link" : ""
              }`}
            >
              Certificate
            </NavLink>
          </li>
          <li
            className="nav-item"
            style={{
              backgroundColor: "#18ca87",
              borderRadius: "20px",
              padding: "2px 15px",
            }}
          >
            <NavLink
              to="/contact"
              className={pathname === "/contact" ? "mactive-link" : ""}
              style={{
                textDecoration: "none",
                color: "white",
              }}
              onClick={() => {
                setClicked(false);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div
          className="icon pe-3 d-sm-none"
          onClick={() => setClicked(!clicked)}
        >
          <i className={"fa-solid fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
