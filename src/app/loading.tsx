import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8 animate-pulse">
      
      <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="border border-gray-200 rounded-xl p-4"
          >
            
            <div className="h-40 w-full bg-gray-200 rounded-lg"></div>

           
            <div className="h-5 w-3/4 bg-gray-200 rounded mt-4"></div>

            <div className="h-4 w-full bg-gray-200 rounded mt-3"></div>

            <div className="h-5 w-1/3 bg-gray-200 rounded mt-3"></div>

          
            <div className="h-10 w-full bg-gray-200 rounded-lg mt-4"></div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default loading;