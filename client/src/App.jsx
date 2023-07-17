import React from "react";
import "./App.css";
import { Home, Pokemon, About, Login } from "./pages";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import { useHome } from "./contexts";

function App() {
  const { isLoading } = useHome();

  //hold the JWT value in a variable and set a state to say whether they are verified or not= this should happen on the login page???
  return (
    <div className="App" style={{ height: isLoading ? "100vh" : "" }}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Pokemon />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
