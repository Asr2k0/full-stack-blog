import { useState } from "react";

const Navbar = () => {
     const [open,setOpen] = useState(true);

    return (
        <div className=" w-full h-16 md:h-20 flex items-center justify-between ">
        {/* Logo is here */}
        <div className="flex items-center gap-2 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" ></img>
        <span class>This is It</span>
        </div>
        {/* MOBILE MENU */}
        <div className="md:hidden">

        <div className="cursor-pointer text-2xl md:hidden" onClick={()=> setOpen(prev=>!prev) }>{open?'☰':'X'}      
        </div>

        <div
        className={`w-full h-screen flex flex-col items-center justify-center gap-3 absolute top-16 transition-all duration-500 ease-in-out  ${
          !open ? "right-0" : "-right-full"
        }`}
      >
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/" className="px-4 py-2 rounded-2xl bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Login 👋 </a>
        
      </div>

      </div>
        
        
      
        

        <div className="hidden md:flex item-center justify-center gap-9">Desktop
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/" className=" px-2 rounded-2xl bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Login 👋 </a>
        </div>
        
    
        </div>
    );
};

export default Navbar;