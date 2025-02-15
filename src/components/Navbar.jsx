import React from 'react'
import { RiRobot3Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
        <nav className="w-full bg-transparent pt-4 px-6 flex justify-between items-center">
            <div>
              <h4 className="text-white fw-bold flex items-center gap-1"> <span><RiRobot3Fill /></span> CodeGenie</h4>
            </div>
            <p className="text-white cursor-pointer hover:underline">Help</p>
      </nav>
    </div>
  )
}

export default Navbar