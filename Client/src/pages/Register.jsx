const Register = () => {
  return(
    <div className="flex flex-col h-screen items-center justify-center bg-magenta">
			<h1 className="text-4xl font-bold text-white capitalize dark:text-white p-2">Register</h1>
			<form className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="pb-1">
              First Name
            </label>
            <input
              id="firstname"
              className="border-2 p-1 border-gray-800 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname" className="pb-1">
              Surname
            </label>
            <input
              id="surname"
              className="border-2 p-1 border-gray-800 rounded-md"
            ></input>
          </div>
          <div className="flex flex-col">
					<label htmlFor="email" className="pb-1">
						Email
					</label>
					<input
						id="email"
						className="border-2 p-1 border-gray-800 rounded-md"
					></input>
					</div>
					<div className="flex flex-col">
						<label htmlFor="personalID" className="pb-1">
							Personal ID
						</label>
						<input
							id="personalID"
							className="border-2 p-1 border-gray-800 rounded-md"
						></input>
					</div>
					<div className="flex flex-col">
						<label htmlFor="phone" className="pb-1">
							Phone Number
						</label>
						<input
							id="phone"
							className="border-2 p-1 border-gray-800 rounded-md"
						></input>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password" className="pb-1">
							Password
						</label>
						<input
							id="password"
							className="border-2 p-1 border-gray-800 rounded-md"
						></input>
					</div>
					<div className="flex flex-col">
						<label htmlFor="retypePass" className="pb-1">
							Retype Password
						</label>
						<input
							id="retypePass"
							className="border-2 p-1 border-gray-800 rounded-md"
						></input>
					</div>
					<div className="flex justify-center items-center ">
						<button className="py-1 px-8 m-0 border-2 border-magenta rounded-md bg-magenta text-white hover:bg-white hover:text-black hover:font-bold">
						Register
						</button>
					</div>
        </div>
			</form>
		</div>
  )
}

export default Register