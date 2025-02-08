import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-white'>
      <div className='text-lg mb-2'>Clinical Trial</div>
      <div className="flex gap-4 border p-4 rounded-lg shadow-lg">
     <div> <Link to='/login'  className="text-blue-600 hover:underline">Login</Link></div>
      <div><Link to='/signup' className="text-blue-600 hover:underline">Register</Link></div>
      </div>
    </div>
  )
}

export default Home
