import React from "react";

const Header = () => {
  return (
    <>
      <header className=" text-white   flex">
        {/* Left column */}
        <div className="flex-1 bg-white ">
          {/* Content for the left column */}
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1704173040/Pngtree_initial_p_circle_logo_vector_5143865_eryrdq.png"
            className="w-12"
            alt="Logo"
          />
          
        </div>
        
        <div className="flex-1 bg-blue-100">
         
          
        </div>
      </header>
    </>
  );
};

export default Header;
