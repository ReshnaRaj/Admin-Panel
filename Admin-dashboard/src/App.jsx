import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "./Home";



function App() {

  
  return (
    <>
   <div className="flex">
   <div className={`w-64 h-screen`}>
    <Sidebar/>
   </div>
    <div className="p-7 text-2xl font-semibold flex-1 h-screen">
      <Home/>
    </div>
    </div>
      
 
   
    </>
  );
}

export default App;
