import React from "react";
import "./App.css";
import { Home, Pokemon, About } from "./pages";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import { useHome } from "./contexts";

function App() {
  const { isLoading } = useHome();
  return (
    <div className="App" style={{ height: isLoading ? "100vh" : "" }}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Pokemon />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
