import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-white flex">
        <div className="flex-3 bg-white shadow-lg">
          <img
            src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1704173040/Pngtree_initial_p_circle_logo_vector_5143865_eryrdq.png"
            className="w-16 mr-24 ml-24"
            alt="Logo"
          />
        </div>

        <div className="flex-1 bg-blue-100 shadow-lg"></div>
      </header>
    </>
  );
};

export default Header;
