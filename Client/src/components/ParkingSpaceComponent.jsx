import { useState } from "react";

export default function ParkingSpaceComponent() {
	const [hoverOnParkingLot, setHoverOnParkingLot] = useState(false);

	const handleMouseOver = () => {
		setHoverOnParkingLot(true);
	};

	const handleMouseLeave = () => {
		setHoverOnParkingLot(false);
	};
	return (
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
	);
}
