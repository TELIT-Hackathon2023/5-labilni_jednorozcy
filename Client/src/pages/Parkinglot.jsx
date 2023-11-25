import { useState } from 'react';
import road from "../assets/road.png"

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
      <div className="grid grid-cols-3 auto-cols-auto place-items-center h-screen bg-cover" style={{backgroundImage:`url(${road})`}}>
        <div className="flex flex-col">
        <div className=' w-[400px] h-[20px] bg-white'></div>
          <div
            className="relative w-[400px] h-[150px]  border-l-[25px] border-white hover:bg-red-600 duration-300 ease-in-out"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {
                hoverOnParkingLot
                ?
                <div className="absolute top-[-50px] right-[-125px] px-6 py-4 bg-gray-100 rounded-[25px] shadow-xl">
                    <div>
                        Duration: 14:00-19:00
                    </div>
                    
                    <div>
                        State: Occupied/Free
                    </div>

                </div>
                : null
            }
          
          </div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px]  bg-green-600  border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px]  border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px]  border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px]  border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
            </div>
            

            <div className="flex flex-col mr-[-575px]">
            <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] "></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] "></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] "></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] "></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] "></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
            </div>

            <div className="flex flex-col">
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
                <div className="w-[400px] h-[150px] border-l-[25px] border-white"></div>
                <div className=' w-[400px] h-[20px] bg-white'></div>
            </div>

    </div>
      
    </>
  )
}
