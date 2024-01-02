import React from 'react'
import { MdDashboard, MdContactSupport } from "react-icons/md";
import { GiFlowerPot } from "react-icons/gi";
import { PiSimCard } from "react-icons/pi";
import { IoLogoWechat } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen shadow-2xl  ">
      <div className="lg:w-60   text-white   ">
        <div className="p-4 flex flex-col items-center lg:items-center">
          <img
            className="w-20 h-20 lg:rounded-full"
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1687947401/xmaxf464kqpy6vd0uhhm.webp"
            alt="icon"
          />
          <div className="text-center lg:text-left mt-2">
            <p className="text-sm font-medium text-black text-center">John Doe </p>
            <button className="text-xs text-black lg:hover:bg-blue-500 py-2 px-4 lg:rounded">johndoe@example.com</button>
             
          </div>
         
        </div>

        <div className="p-3 space-y-4 lg:space-y-10">
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <MdDashboard className="mr-2 text-black" /> <p className='text-black'>Dashboard</p>
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <GiFlowerPot className="mr-2 text-black"  /><p className='text-black'> Perks</p>
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <PiSimCard className="mr-2 text-black" /> <p className='text-black'>AddOns</p>
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <IoLogoWechat className="mr-2 text-black" /><p className='text-black'> FAQ</p>
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <MdContactSupport className="mr-2 text-black" /><p className='text-black'> Support</p>
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
          <p className='text-black'> Logout</p> <AiOutlineLogout className="ml-2 text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
