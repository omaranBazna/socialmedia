import "./App.css";
import Home from "./Pages/Home.jsx";
import Feed from "./Pages/Feed.jsx";
import Profile from "./Pages/Profile.jsx";
import NavbarC from "./Components/NavbarC";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <main>
      <NavbarC login={login} setLogin={setLogin}>
        {" "}
      </NavbarC>

      <Routes>
        <Route path="/feed" element={<Feed></Feed>} />
        <Route path="/profile" element={<Profile> </Profile>} />
        <Route
          path="/"
          element={<Home login={login} setLogin={setLogin}></Home>}
        />
      </Routes>

      <footer>footer</footer>
    </main>
  );
}
