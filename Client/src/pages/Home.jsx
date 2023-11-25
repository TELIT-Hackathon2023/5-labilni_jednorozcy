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

					<div className="pl-[95px] text-2xl pr-[180px] mt-[180px] text-justify mb-[50px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						In vehicula tincidunt ultrices. Sed ligula elit,
						tristique ut ligula nec, pulvinar aliquet massa. Donec
						dictum sodales lacus ac maximus. Maecenas aliquam
						volutpat tellus sed maximus. Nullam eu consectetur
						libero, ut tincidunt urna. Pellentesque porttitor turpis
						pulvinar tempus consequat. Suspendisse potenti. Quisque
						quis blandit elit. Pellentesque vehicula, massa et
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
