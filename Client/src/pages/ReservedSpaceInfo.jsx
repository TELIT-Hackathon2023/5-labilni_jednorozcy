

export default function ReservedSpaceInfo() {

    return (
		<div className="relative w-80 h-80 bg-white rounded-3xl border-2 flex flex-col p-4 justify-between">
			<span>From</span>
			<span>Date, time</span>
			<span>To</span>
			<span>Date, time</span>
			<span>Spz</span>
			<div>
				<span>Spz</span>
				<button>Change</button>
			</div>
			<button className="p-1  border-2 border-red-600 rounded-full bg-red-600 text-white hover:bg-white hover:text-red-600 hover:font-bold duration-300 ease-in-out">
				Cancel reservation{" "}
			</button>
		</div>
	);
}