const Register = () => {
  return(
    <div className="flex flex-col h-screen items-center justify-center bg-magenta">
			<form className="max-w-4xl w-1/3  p-8 mx-auto bg-white rounded-lg shadow-md">
			<div className="flex flex-row justify-between">
					<h1 className="font-bold text-3xl">Login</h1>
					<img
						src={telekomLogo}
						alt="Telekom Logo"
						className="w-1/2"
					/>
				</div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col">
            <input
							defaultValue="Firstname"
              id="firstname"
              className="border-2 py-1 px-2 w-full  rounded-full bg-gray-300"
            ></input>
          </div>
          <div className="flex flex-col">
            <input
							defaultValue="Surname"
              id="surname"
              className="border-2 py-1 px-2 w-full  rounded-full bg-gray-300"
            ></input>
          </div>
          <div className="flex flex-col">
					<input
						defaultValue="Email"
						id="email"
						className="border-2 py-1 px-2 w-full  rounded-full bg-gray-300"
					></input>
					</div>
					<div className="flex flex-col">
						<input
							defaultValue="Personal ID"
							id="personalID"
							className="border-2 py-1 px-2 w-full  rounded-full bg-gray-300"
						></input>
					</div>
					<div className="flex flex-col">
						<input
							defaultValue="Phone Number"
							id="phone"
							className="border-2 py-1 px-2 w-full  rounded-full bg-gray-300"
						></input>
					</div>
					<div className="flex flex-col">
						<input
							defaultValue="Password"
							id="password"
							className="border-2 py-1 px-2 w-full  rounded-full bg-gray-300"
						></input>
					</div>
					<div className="flex flex-col">
						<input
							defaultValue="Retype Password"
							id="retypePass"
							className="border-2 py-1 px-2 w-full  rounded-full bg-gray-300"
						></input>
					</div>
					<div className="flex justify-center items-end ">
						<button className="py-1 px-8 m-0 border-2 border-magenta rounded-full bg-magenta text-white hover:bg-white hover:text-black hover:font-bold w-full">
						Register
						</button>
					</div>
        </div>
			</form>
		</div>
  )
}

export default Register