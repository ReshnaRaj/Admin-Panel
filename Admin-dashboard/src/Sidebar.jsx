import React from 'react'
import { MdDashboard, MdContactSupport } from "react-icons/md";
import { GiFlowerPot } from "react-icons/gi";
import { PiSimCard } from "react-icons/pi";
import { IoLogoWechat } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-60 bg-green-700 text-white">
        <div className="p-4 flex flex-col items-center lg:items-start">
          <img
            className="w-20 h-20 lg:rounded-full"
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1687947401/xmaxf464kqpy6vd0uhhm.webp"
            alt="icon"
          />
          <div className="text-center lg:text-left mt-2">
            <p className="text-sm font-medium">John Doe </p>
            <p className="text-xs">johndoe@example.com</p>
          </div>
        </div>

        <div className="p-3 space-y-4 lg:space-y-10">
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <MdDashboard className="mr-2" /> Dashboard
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <GiFlowerPot className="mr-2" /> Perks
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <PiSimCard className="mr-2" /> AddOns
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <IoLogoWechat className="mr-2" /> FAQ
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            <MdContactSupport className="mr-2" /> Support
          </button>
          <button className="flex items-center lg:hover:bg-blue-500 py-2 px-4 lg:rounded">
            Logout <AiOutlineLogout className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
