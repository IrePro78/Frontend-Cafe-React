import { useNavigate, Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Dashboard = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint

    setAuth({
      email: "",
      password: "",
      role: "",
      access_token: "",
      refresh_token: "",
    });
    navigate("/admin");
  };

  return (
    <>
      <section>
        <h1>Dashboard</h1>
        <br />
        <p>You are logged in!</p>
        <br />
        <Link to="/admin">Go to the Admin page</Link>
        <br />
        <Link to="/linkpage">Go to the link page</Link>
        <div className="flexGrow">
          <button onClick={logout}>Sign Out</button>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
