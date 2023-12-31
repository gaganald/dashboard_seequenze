import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-200 text-black flex items-center justify-center h-[500px]'>
      <div>
         <h1 className='font-bold text-black'>Home Page</h1>
         <p>Go to <Link to="/myprojects" className='text-blue-600'>Dashboard</Link></p>
      </div>
    </div>
  )
}

export default Home