import React from 'react';
import Image from 'next/image';

const NavLink = async () => {

const response = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
const data = await response.json();
console.log(data);

    return (
        <div className='flex justify-center'>
             {data.map((nav) => (
                <div key={nav.id} className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer">


                    {/* wrong it is icone not image */}
                    {/* <div><Image src={nav.icon} alt={nav.nameBn} width={30} height={30}/></div> */}

                    <div className="text-2xl">
    {nav.icon}
</div>
                    <div>{nav.nameBn}</div>

                </div>
            ))}
        </div>
    );
};

export default NavLink;