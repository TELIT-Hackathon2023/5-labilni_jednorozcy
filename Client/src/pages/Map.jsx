import { Link } from "react-router-dom"
import map from "../assets/map.jpg"

export default function Map() {
  return (
    <>
        <div className="mx-auto w-full">
            
            <div  className="bg-cover w-full h-screen" style={{backgroundImage: `url(${map})`}}>
                <Link to="/parking_lot"> 
                    <div  className="absolute hover:bg-blue-400 opaci duration-300 ease-in-out top-[210px] left-[1180px] text-xl h-[90px] w-[115px] px-2 rotate-[-16deg]"></div>
                </Link>
     
            </div>
        </div>
      
    </>
  )
}
