import React from 'react'
import { MdDashboard } from "react-icons/md";
import { GiFlowerPot } from "react-icons/gi";
import { PiSimCard } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="flex lg:flex-row h-screen">
    <div className="w-16 lg:w-40 bg-green-700 text-white">
      <div className="p-4 flex items-center">
        <img
          className="w-14 rounded-full"
          src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1687947401/xmaxf464kqpy6vd0uhhm.webp"
          alt="icon"
        />
         
      </div>

      <div className="p-3 space-y-10">
        <li className="flex items-center">
          <span className="lg:ml-2 font-bold hidden lg:block ">
            <MdDashboard/>Dashboard
      
          </span>
        </li>
        <li className="flex items-center">
          <span className="lg:ml-2 font-bold hidden lg:block "> 
          <GiFlowerPot />
          Perks</span>
        </li>
        <li className="flex items-center">
          <span className="lg:ml-2 font-bold hidden lg:block ">
            AddOns
          </span>
        </li>
        <li className="flex items-center">
          <span className="lg:ml-2 font-bold hidden lg:block  ">FAQ</span>
        </li>
        <li className="flex items-center">
          <span className="lg:ml-2 font-bold hidden lg:block  "> Support</span>
        </li>
        
         
         
        
       
        
       
      </div>
       
     
     
    </div>
  </div>
  )
}

export default Sidebar