import telecomPicture from "../assets/telekomPicture.png"
import bgImage from '../assets/car.jpeg';
import { Link } from "react-router-dom";
import ReservedSpaceInfo from "./ReservedSpaceInfo";


export default function Home() {
  return (
		<>
			<ReservedSpaceInfo />
			<div className="flex flex-cols-2 h-screen">
				<div className="relative w-full">
					<div className="flex items-end bg-magenta text-white h-[300px] pl-[95px] pb-6 text-6xl font-bold">
						<h1>Parking Manager</h1>
					</div>

                <div className="pl-[95px] text-2xl pr-[180px] mt-8 text-justify mb-4">
                Welcome to our Parking Manager! Easily register and streamline your parking experience by adding your license plate details and car count. Navigate the parking lot map, choose your preferred spot, and even filter availability based on your desired reservation time. Admins have access to comprehensive reservation management. Reserve with ease, ensuring a seamless start to your journey, whether it's finding parking or efficiently managing your event logistics.
                </div>

					<Link
						to="/login"
						className="bg-magenta border-2 border-magenta px-5 py-[12px] text-center align-middle w-auto ml-[95px] rounded-full text-2xl font-bold text-white hover:bg-white hover:text-magenta hover:font-bold duration-300 ease-in-out"
					>
						Get started
					</Link>

					<img
						src={telecomPicture}
						className="absolute bottom-0 right-8"
					/>
				</div>

				<div
					className="w-full h-screen bg-cover"
					style={{ backgroundImage: `url(${bgImage})` }}
				>
					{/* Your content goes here */}
				</div>
			</div>
		</>
  );
}
