import React from 'react'
import AdminPanel from './AdminPanel'

export default function Admin() {
  return (
    <>
    <div className="flex flex-col-2">
        <AdminPanel/>
        <div className="flex justify-center w-full items-center text-7xl font-bold">
            Welcome to admin mode!
        </div>
    </div>

      
    </>
  )
}
