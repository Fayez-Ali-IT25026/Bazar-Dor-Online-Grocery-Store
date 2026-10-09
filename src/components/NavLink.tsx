import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavLink = async () => {

const response = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
// const response = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
const data = await response.json();
// console.log(data);

    return (
        <div className='flex flex-wrap justify-center items-center gap-2 md:gap-3 py-3 px-4 bg-white border-b border-gray-200 shadow-sm'>
           <Link 
                href="/" 
                className='flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-green-600 hover:bg-green-50 hover:text-green-700 transition'
            >
                হোম
            </Link>



            {/* <Link href={"/src/app/page.tsx"}>home</Link> */}
             {data.map((nav) => (

//  < Link href="/" >হোম</Link>   can not use here

                // can not use herf in div have to use on <a> or <Link>
                // <div key={nav.id} className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer" href={`/category/${nav.id}`}>
<Link key={nav.id} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition cursor-pointer" href={`/category/${nav.id}`}>

                    {/* wrong it is icone not image */}
                    {/* <div><Image src={nav.icon} alt={nav.nameBn} width={30} height={30}/></div> */}

                    <div className="text-2xl">
    {nav.icon}
</div>
                    <div className="font-medium">{nav.nameBn}</div>

                </Link>
            ))}
        </div>
    );
};

export default NavLink;