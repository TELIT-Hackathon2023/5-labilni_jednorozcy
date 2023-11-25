import { useState } from "react";
import Login from './pages/Login.jsx'
import Home from  './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Map from "./pages/Map.jsx";
import Cars from "./pages/Cars.jsx";
import Reservations from "./pages/Reservations.jsx";
import Users from "./pages/Users.jsx";
import ParkingLot from "./pages/Parkinglot.jsx";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Register from './pages/Register.jsx'
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';




function App() {



	return (
		<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/login" element={<Login />}/>
				<Route path="*" element={<Error />} />
				<Route path="/register" element={<Register />} />
			{/*
				<ProtectedRoute path="/map" component={Map} />
				<ProtectedRoute path="/parking_lot" component={ParkingLot} /> 
				*/
			}

				<Route path="/admin" element={<Admin/>}/>
				<Route path="/reservations" element={<Reservations/>}/>
				<Route path="/cars" element={<Cars/>}/>
				<Route path="/users" element={<Users/>}/>
			</Routes>
		</BrowserRouter>

		</>
	);
}

export default App;
