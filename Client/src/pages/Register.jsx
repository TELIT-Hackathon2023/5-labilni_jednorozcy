const Register = () => {
  return(
    <div className="flex h-screen items-center justify-center bg-magenta">
			<form className="flex flex-col w-80 h-96 justify-around rounded-lg bg-white p-6">
				<div className="flex flex-col">
					<label htmlFor="firstname" className="pb-2">
						First Name
					</label>
					<input
						defaultValue="firstname"
						id="firstname"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
				<div className="flex flex-col">
					<label htmlFor="surname" className="pb-2">
						Surname
					</label>
					<input
						defaultValue="surname"
						id="surname"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
        <div className="flex flex-col">
					<label htmlFor="email" className="pb-2">
						Email
					</label>
					<input
						defaultValue="email"
						id="email"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
        <div className="flex flex-col">
					<label htmlFor="personalID" className="pb-2">
						Personal ID
					</label>
					<input
						defaultValue="personalID"
						id="personalID"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
        <div className="flex flex-col">
					<label htmlFor="lpn" className="pb-2">
						License Plate Number
					</label>
					<input
						defaultValue="lpn"
						id="lpn"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
        <div className="flex flex-col">
					<label htmlFor="phone" className="pb-2">
						Phone Number
					</label>
					<input
						defaultValue="phone"
						id="phone"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
        <div className="flex flex-col">
					<label htmlFor="password" className="pb-2">
						Password
					</label>
					<input
						defaultValue="password"
						id="password"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
        <div className="flex flex-col">
					<label htmlFor="retypePass" className="pb-2">
						Retype Password
					</label>
					<input
						defaultValue="retypePass"
						id="retypePass"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
				</div>
				<button className="p-1 border-2 border-magenta rounded-md bg-magenta text-white hover:bg-white hover:text-black hover:font-bold">
					Register
				</button>
			</form>
		</div>
  )
}

export default Register