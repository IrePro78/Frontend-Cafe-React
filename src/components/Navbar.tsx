import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};
