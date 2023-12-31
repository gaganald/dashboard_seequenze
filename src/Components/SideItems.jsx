import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MyProjects from './MyProjects'

const SideItems = ({icons, name, path}) => {
  return (
    <>
    <NavLink to={path} className={({isActive}) => isActive ? "active" : "text-black/60"}>
    <div className='px-2 flex items-center gap-2 hover:text-orange-500'>
        <div className='text-[18px]'>{icons}</div>
        <a href="" className='text-[14px] font-bold '>{name}</a>
    </div>
    </NavLink>
    </>
  )
}

export default SideItems