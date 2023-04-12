import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import LinkPage from "./components/LinkPage";
import Home from "./components/Home";
import Admin from "./components/Admin";

enum ROLES {
  Admin = "admin",
  User = "user",
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<Home />} />

        {/* we want to protect these routes */}
        <Route
          element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
