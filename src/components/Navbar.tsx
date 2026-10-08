import React from 'react';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {


    const date = new Date().toLocaleDateString("bn-BD", { 
    dateStyle: "full", 
    });



    return (
        <div className="bg-white shadow-md">
            <nav className="flex justify-between items-center p-4 bg-white  max-w-7xl mx-auto">
                <div className="flex items-center space-x-4">
                    <Image 
                    src="/logo.jpg"
                    alt="Logo"
                    width={50}
                    height={50}
                    priority
                    />
                    <div>
                        <p>বাজার দর</p>
                        <span>{date}</span>
                        </div>
                </div>
                <div>
<button className="btn btn-ghost border-1 border-gray-400">সাইন ইন</button>
<button className="btn bg-green-500 text-white">সাইন আপ</button>
                </div>
            </nav>
            <NavLink/>
        </div>
    );
};

export default Navbar;