import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
     const [open,setOpen] = useState(true);

    return (
        <div className=" w-full h-16 md:h-20 flex items-center justify-between ">
        {/* Logo is here */}
        <div className="flex items-center gap-2 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" ></img>
        <span>This is It</span>
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
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/login" className="px-4 py-2 rounded-2xl bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Login 👋 </Link>
        
      </div>

      </div>
        
        
      
        {/*Desktop Icons*/}

        <div className="hidden md:flex item-center justify-center gap-9">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/login" className=" px-2 rounded-2xl bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Login 👋 </Link>
        </div>
        
    
        </div>
    );
};

export default Navbar;