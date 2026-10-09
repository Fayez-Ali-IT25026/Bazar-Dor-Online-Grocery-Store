import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const HeroSection = () => {



    const date = new Date().toLocaleDateString("bn-BD", { 
    dateStyle: "full", 
    });

    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 px-6 py-12 md:px-12 lg:px-20 bg-green-50 rounded-2xl my-6'>
            
<div className='max-w-2xl'>
     <span className='text-green-600 font-medium'>{date}</span>

    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-4 pt-2 text-gray-800 leading-tight'>আজকের বাজারের দাম এক নজরে</h1>
    <p className='pb-5 text-gray-600 text-base md:text-lg leading-7'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
 
    {/* <Link href="/AllProductsZ" className="btn bg-green-500 hover:bg-green-600 border-none text-white px-6"  
                    >সব পণ্য দেখুন</Link> */} 


                     <button className="btn bg-green-500 hover:bg-green-600 border-none text-white px-6"  
                    >সব পণ্য দেখুন</button>
                    
</div>
<div>

    <Image src = "/bazar-hero.png" alt='Bazar' width={350} height={350} className='w-64 md:w-80 lg:w-96'></Image>
</div>

        </div>
    );
};

export default HeroSection;