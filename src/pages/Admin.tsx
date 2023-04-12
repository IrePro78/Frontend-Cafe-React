import { Link, Outlet } from "react-router-dom";
import Users from "./Users";

import * as React from "react";

const Admin = () => {
  return (
      <section>
        <h1>Admins Page</h1>
        <br />
        <Users />
        <br />
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </section>
  );
};

export default Admin;
