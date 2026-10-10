import React from 'react';
import Link from 'next/link';

const PriceDecreased = async () => {



// const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
const data = await res.json()
// console.log(data)
const decreasedPrice = data
  .filter((item) => item.change.dir === "down")
  .slice(0, 6);





    return (
        // <Link href={'/src/app/productDetails/${data.id}'}>
        
        <div className='pt-30'>
    <div className="flex gap-2">
      <span className="badge badge-success">▼</span>
      <h2 className="font-bold text-3xl p-2">আজ দাম কমেছে</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {decreasedPrice.map((item) => (
        <Link href={`/productDetails/${item.id}`} key={item.id}>
          <div
            className="card bg-base-100 border shadow-sm"
          >
            <div className="card-body">

              <div className="flex items-center gap-3">
                <div className="text-4xl">
                  {item.image}
                </div>

                <div>
                  <h2 className="card-title">
                    {item.nameBn}
                  </h2>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  আজকের দাম
                </p>

                <p className="text-3xl font-bold">
                  ৳{item.today}
                  <span className="text-sm font-normal">
                    /{item.unit}
                  </span>
                </p>
              </div>

              {/* <div className="mt-2">
                <span className="badge badge-success">
                  ▼ {item.change.pct}%
                </span>

                <span className="ml-2 text-sm text-gray-500">
                  গতকাল ৳{item.yesterday}
                </span>
              </div> */}

<div className="mt-2 flex items-center gap-2">
  <span className="badge badge-success whitespace-nowrap">
    ▼ {item.change.pct}%
  </span>

  <span className="text-sm text-gray-500 whitespace-nowrap">
    গতকাল ৳{item.yesterday}
  </span>
</div>


            </div>
          </div>
        </Link>
      ))}

    </div>
  </div>
        
       
    );
};

export default PriceDecreased;