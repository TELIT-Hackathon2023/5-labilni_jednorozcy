import { useState } from "react";
import  Login from './pages/Login.jsx'
import   Home from  './pages/Home.jsx'
import Error from './pages/Error.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register.jsx'


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/login" element={<Login />}/>
				<Route path="*" element={<Error />} />
				<Route path="/register" element={<Register />} />
			</Routes>

		</BrowserRouter>

		</>
	);
}

export default App;
