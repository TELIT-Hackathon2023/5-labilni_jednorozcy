import telekomLogo from "../assets/telekomLogo.png";


const Register = () => {
  return (
		<div className="flex flex-col h-screen items-center justify-center bg-magenta">
			<form className="grid max-w-4xl w-1/3  p-8 mx-auto bg-white rounded-lg shadow-md">
				<div className="flex flex-row justify-around mb-8 mt-1 items-center">
					<h1 className="font-bold text-2xl">Register</h1>
					<img
						src={telekomLogo}
						alt="Telekom Logo"
						className="w-1/4"
					/>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<input
						placeholder="Firstname"
						type="text"
						className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
					></input>
					<div className="flex flex-col">
						<input
							placeholder="Surname"
							type="text"
							className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
						></input>
					</div>
					<div className="flex flex-col col-span-2">
						<input
							placeholder="Email"
							type="email"
							className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
						></input>
					</div>
					<div className="flex flex-col col-span-2">
						<input
							placeholder="Personal ID"
							type="text"
							className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full "
						></input>
					</div>
					<div className="flex flex-col col-span-2">
						<input
							placeholder="Phone Number"
							type="number"
							className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
						></input>
					</div>
					<div className="flex flex-col">
						<input
							placeholder="Password"
							type="password"
							className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
						></input>
					</div>
					<div className="flex flex-col">
						<input
							placeholder="Retype Password"
							type="password"
							className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
						></input>
					</div>
				</div>
				<button
					className="justify-self-center p-1.5 pl-1 mt-6 w-40 border-2 text-sm border-magenta
						rounded-full bg-magenta text-white hover:bg-white
						hover:text-magenta hover:font-bold duration-300 ease-in-out"
				>
					Register
				</button>
				<div className="mt-6 items-center w-full flex justify-around">
					<div className="font-bold text-magenta">
						Already registered?
					</div>
					<button
						className="p-1.5 pl-1 w-20 border-2 text-sm border-magenta
						rounded-full bg-magenta text-white hover:bg-white
						hover:text-magenta hover:font-bold duration-300 ease-in-out"
					>
						Login
					</button>
				</div>
			</form>
		</div>
  );
}

export default Register