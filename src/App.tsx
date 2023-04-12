import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { Outlet, Route, Routes } from "react-router-dom";
import RequireAuth from "./pages/RequireAuth";
import Missing from "./pages/Missing";
import Unauthorized from "./pages/Unauthorized";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";

enum ROLES {
  Admin = "admin",
  User = "user",
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*public routes*/}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Home />} />
          we want to protect these routes
          <Route
            element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}
          >
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
