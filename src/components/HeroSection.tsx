import React from 'react';
import Image from 'next/image';


const HeroSection = () => {



    const date = new Date().toLocaleDateString("bn-BD", { 
    dateStyle: "full", 
    });

    return (
        <div className='flex justify-center items-center'>
            
<div className=''>
     <span className='text-green-400'>{date}</span>

    <h1 className='text-3xl font-bold pb-3'>আজকের বাজারের দাম এক নজরে</h1>
    <p className='pb-3'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>

    <button className="btn bg-green-500 text-white"  
                    >সব পণ্য দেখুন</button>
</div>
<div>

    <Image src = "/src/asset/bazar-hero.png" alt='Bazar' width={50} height={50}></Image>
</div>

        </div>
    );
};

export default HeroSection;