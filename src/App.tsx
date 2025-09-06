import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{ margin: 0, fontSize: "2rem" }}>Welcome</h1>
      <p style={{ marginTop: 8 }}>Start building your pages here.</p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
