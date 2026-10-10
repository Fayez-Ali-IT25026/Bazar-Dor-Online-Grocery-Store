import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="w-full border-t-2 border-gray-600 mt-20 border-[#e1e8e1] bg-[#fafcfa] font-['Hind_Siliguri',sans-serif]">
      <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-2 px-4 py-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm leading-5 text-[#1d271f]/70">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-sm leading-5 text-[#1d271f]/70">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>

        </div>
    );
};

export default Footer;