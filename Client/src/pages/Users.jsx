import React from 'react'
import AdminPanel from './AdminPanel'
import User from '../components/User'

export default function Users() {
  return (
    <div className="flex flex-col-2">
        <AdminPanel/>
        <div className="flex flex-col py-2 m-2 h-full w-full bg-gray-300 rounded-3xl">
          <div className='grid grid-cols-5 w-full h-full px-2 place-items-center font-bold text-xl'>
            <h1>First Name:</h1>
            <h1>Surname:</h1>
            <h1>Email:</h1>
            <h1>ID:</h1>
            <h1>Phone:</h1>
          </div>
          <User />
        </div>
    </div>
  )
}
