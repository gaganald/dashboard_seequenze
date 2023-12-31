import React from 'react'
import { Link } from 'react-router-dom'

const MyProjects = ({cardData}) => {
  return (
    <div className='flex gap-5 flex-wrap mt-5'>
        {
            cardData.map((items) =>(
                <div key={items.id} className='flex flex-col items-center w-[240px] h-[190px] rounded-md bg-gray-100'>
                    <Link to={`/myprojects/${items.id}`} >
                      <img src={items.download_url} alt="" className='rounded-md w-[220px] h-[130px]' />
                    </Link>
                    <h4 className='font-bold text-black text-lg'>{items.author}</h4>
                    <a href={items.url} className='text-red-400 font-normal'>Image Url</a>
                </div>
            ))
        }
    </div>
  )
}

export default MyProjects