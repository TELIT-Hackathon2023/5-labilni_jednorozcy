import { useState } from "react";
import road from "../assets/road.png";
import ParkingSpaceComponent from "../components/ParkingSpaceComponent";

export default function Parkinglot() {
	return (
		<>
			<div
				className="flex flex-row auto-cols-auto justify-between items-center h-screen w-screen bg-cover p-10"
				style={{ backgroundImage: `url(${road})` }}
			>
				<div className="flex flex-row h-full w-[25%]">
					<div className="h-full w-[7%] bg-white"></div>
					<div className="flex flex-col w-full h-full ">
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
					</div>
				</div>
				<div className="flex flex-row h-full w-[45%]">
					<div className="flex flex-col w-full">
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
					</div>
					<div className="h-full w-[7%] bg-white"></div>
					<div className="flex flex-col w-full">
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
						<ParkingSpaceComponent />
						<div className=" w-[full] h-[3%] bg-white"></div>
					</div>
				</div>
			</div>
		</>
	);
}
