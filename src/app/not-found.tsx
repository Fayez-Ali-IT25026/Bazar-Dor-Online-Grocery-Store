import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-green-600">
        404
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found!
      </h2>

      <p className="text-gray-500 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
        </div>
    );
};

export default NotFound;