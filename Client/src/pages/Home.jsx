import telecomPicture from "../assets/telekomPicture.png";
import bgImage from "../assets/car.jpeg";
import { Link } from "react-router-dom";
import ReservedSpaceInfo from "./ReservedSpaceInfo";

export default function Home() {
	return (
		<>
			<div className="flex flex-cols-2 h-screen w-1/2">
				<div className="relative w-full">
					<div className="flex items-end bg-magenta text-white h-[300px] pl-[95px] pb-6 text-6xl font-bold">
						<h1>Parking Manager</h1>
					</div>

					<div className="p-10 text-2xl">
						Welcome to our Parking Manager! Easily register and
						streamline your parking experience by adding your
						license plate details and car count. Navigate the
						parking lot map, choose your preferred spot, and even
						filter availability based on your desired reservation
						time. Admins have access to comprehensive reservation
						management. Reserve with ease, ensuring a seamless start
						to your journey, whether it's finding parking or
						efficiently managing your event logistics.
					</div>
					<div className="flex justify-around items-center p-4">
						<Link to="/login">
							<button
								className="p-4 pl-4 border-2 text-4xl border-magenta
						rounded-full bg-magenta text-white hover:bg-white duration-300 ease-in-out
						hover:text-magenta hover:font-bold"
							>
								Get started
							</button>
						</Link>

						<img src={telecomPicture} className="" />
					</div>
				</div>

				<div
					className="w-1/2 h-screen bg-cover fixed right-0"
					style={{ backgroundImage: `url(${bgImage})` }}
				>
					{/* Your content goes here */}
				</div>
			</div>
		</>
	);
}
