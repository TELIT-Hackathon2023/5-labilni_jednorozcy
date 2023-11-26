import { useState } from "react";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Map from "./pages/Map.jsx";
import Cars from "./pages/Cars.jsx";
import Reservations from "./pages/Reservations.jsx";
import Users from "./pages/Users.jsx";
import ParkingLot from "./pages/Parkinglot.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";

import { useAuthContext } from "./hooks/useAuthContext.js";

export default function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={!user ? <Home /> : <Navigate to="/parking" />} />
          <Route
            path="/login"
            element={user ?  <Navigate to="/parking" />: <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/parking" /> :<Register /> }
          />
          <Route path="/parking">
            <Route index element={user ? <Map/> :<Navigate to="/" />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
