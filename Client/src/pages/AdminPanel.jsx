import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminPanel() {
  return (
    <>
    <div className="bg-magenta flex flex-col justify-center  h-screen text-xl space-y-8 font-bold px-8">
        <Link to="/cars" className="cursor-pointer">
            Parking Spaces
        </Link>
        <Link to="/users" className="cursor-pointer">
            Users
        </Link>
        <Link to="/reservations" className="cursor-pointer">
            Reservations
        </Link>
    </div>

      
    </>
  )
}
