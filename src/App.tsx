import React from "react";
import "./index.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{ margin: 0, fontSize: "2rem" }}>Welcome</h1>
      <p style={{ marginTop: 8 }}>Start building your pages here.</p>
    </div>
  );
};

export default function App() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "16px" }}>
      <Home />
    </main>
  );
}
