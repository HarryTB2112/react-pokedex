import { NavLink, Outlet } from "react-router-dom";

function Nav() {
  const userToken = "";
  const userVerified = true;
  return (
    <>
      <nav className="nav">
        <h1 className="logo">Pokédex</h1>
        <ul className="nav-links">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "rgb(208, 29, 29)" : null,
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "rgb(208, 29, 29)" : null,
              };
            }}
          >
            About
          </NavLink>
          {userVerified ? (
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(208, 29, 29)" : null,
                };
              }}
            >
              Log In
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(208, 29, 29)" : null,
                };
              }}
            >
              Alex
            </NavLink>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
