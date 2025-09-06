import React from "react";
import { Outlet } from "react-router-dom";
import { TopNav } from "../components/TopNav";

export const MainLayout: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <TopNav showThemeSwitcher={true} />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
