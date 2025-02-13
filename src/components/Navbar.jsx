import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="w-full bg-transparent pt-4 px-6 flex justify-between items-center">
            <h4 className="text-white fw-bold">CodeGenie</h4>
            <p className="text-white cursor-pointer hover:underline">Help</p>
      </nav>
    </div>
  )
}

export default Navbar