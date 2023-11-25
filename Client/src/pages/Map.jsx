import { Link } from "react-router-dom"
import map from "../assets/map.jpg"

export default function Map() {
  return (
    <>
        <div className="mx-auto w-full">
            
            <div  className="bg-cover w-full h-screen" style={{backgroundImage: `url(${map})`}}>
                <Link to="/parking_lot"> 
                    <div  className="absolute bg-red-400 top-0 right-0 text-xl h-10 px-2">TU KLIKAJ !</div>
                    </Link>
     
            </div>
        </div>
      
    </>
  )
}
