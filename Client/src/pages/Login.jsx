export default function Login() {

	return (
		<div className="flex h-screen items-center justify-center bg-magenta">
			<form className="flex flex-col w-80 h-96 justify-around rounded-lg bg-white p-6">
				<div className="flex flex-col">
					<label htmlFor="username" className="pb-2 font-telecom">
						Username
					</label>
					<input
						defaultValue="username"
						id="username"
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
				<button className="p-1 border-2 border-magenta rounded-md bg-magenta text-white hover:bg-white hover:text-black hover:font-bold">
					Login
				</button>
			</form>
		</div>
	);
}

