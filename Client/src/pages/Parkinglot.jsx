import { useState } from "react";
import road from "../assets/road.png";

export default function Parkinglot() {
	const [hoverOnParkingLot, setHoverOnParkingLot] = useState(false);

	const handleMouseOver = () => {
		setHoverOnParkingLot(true);
	};

	const handleMouseLeave = () => {
		setHoverOnParkingLot(false);
	};

	return (
		<>
			<div
				className="flex flex-row auto-cols-auto justify-between items-center h-screen w-screen bg-cover p-10"
				style={{ backgroundImage: `url(${road})` }}
			>
				<div className="flex flex-row w-[25%] h-full ">
					<div className="h-full w-[7%] bg-white"></div>
					<div className="flex flex-col w-full h-full">
						<div className=" w-[full] h-[3%] bg-white "></div>
						<div
							className="relative w-full h-[18%] hover:bg-red-600 duration-300 ease-in-out flex justify-center items-center "
							onMouseOver={handleMouseOver}
							onMouseLeave={handleMouseLeave}
						>
							<h1 className="text-6xl font-bold text-white">1</h1>
							{hoverOnParkingLot ? (
								<div className="absolute top-[-50px] right-[-125px] px-6 py-4 bg-gray-100 rounded-[25px] shadow-xl">
									<div>Duration: 14:00-19:00</div>

									<div>State: Occupied/Free</div>
								</div>
							) : null}
						</div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%]  bg-green-600 "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
					</div>
				</div>
				<div className="flex flex-row h-full w-[45%]">
					<div className="flex flex-col w-full">
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%] "></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
					</div>
					<div className="h-full w-[7%] bg-white"></div>
					<div className="flex flex-col w-full">
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%]"></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%]"></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%]"></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%]"></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
						<div className="w-[full] h-[18%]"></div>
						<div className=" w-[full] h-[3%] bg-white"></div>
					</div>
				</div>
			</div>
		</>
	);
}
