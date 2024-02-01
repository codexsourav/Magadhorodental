import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation();

    React.useEffect(() => {
        setShowMenu(false);
    }, [location])
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className=" w-full h-16 bg-blue-500 z-1">
            <div className="flex justify-between items-center gap-5 m-auto max-w-[1400px] px-5 md:px-10 h-full">
                <a href="/"><img src="/images/big-logo.png" className="h-16" alt="logo" /></a>
                <div className={` md:h-full  md:block md:relative fixed h-screen w-screen md:bg-blue-500 bg-white top-0 right-0 ${showMenu ? "block z-50" : "hidden"}`}>
                    <IoCloseOutline onClick={() => setShowMenu(false)} size={50} className="absolute right-5 top-5 text-blue-600 md:hidden block" />

                    <ul className="flex items-center md:justify-end justify-center h-full font-bold md:text-white md:text-base text-lg text-blue-600 flex-col md:flex-row  md:gap-0 gap-5">
                        <li className="md:h-full h-16 flex items-center justify-center">
                            <a className="hover:border-b-2 border-white flex justify-center md:text-lg text-4xl  items-center h-full px-4" href="/">Home</a>
                        </li>
                        <li className="md:h-full h-16 flex items-center justify-center">
                            <a className="hover:border-b-2 border-white flex justify-center md:text-lg text-4xl  items-center h-full px-4" href="/#about">About Us</a>
                        </li>
                        <li className="md:h-full h-16 flex items-center justify-center">
                            <a className="hover:border-b-2 border-white flex justify-center md:text-lg text-4xl  items-center h-full px-4" href="/#services">Services</a>
                        </li>
                        <li className="md:h-full h-16 flex items-center justify-center">
                            <a className="hover:border-b-2 border-white flex justify-center md:text-lg text-4xl  items-center h-full px-4" href="/#doctors">Our Doctors</a>
                        </li>
                        <li className="md:h-full h-16 flex items-center justify-center">
                            <a className="hover:border-b-2 border-white flex justify-center md:text-lg text-4xl  items-center h-full px-4" href="/blogs">Blogs</a>
                        </li>
                        <li className="md:h-full h-16 flex items-center justify-center">
                            <a className="hover:border-b-2 border-white flex justify-center md:text-lg text-4xl  items-center h-full px-4" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <FiMenu className="text-white md:hidden block" size={30} onClick={() => setShowMenu(true)} />
            </div>
        </div>
    )
}
export default Navbar;