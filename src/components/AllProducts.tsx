import React from 'react';
import Link from 'next/link';

const AllProducts = async() => {



    // const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")

const data = await res.json()
// console.log(data)


// const increasePrice = data
//   .filter((item) => item.change.dir === "up")



  
// const decreasedPrice = data
//   .filter((item) => item.change.dir === "down")
//   .slice(0, 6);


// {/* <Link href={'/src/app/productDetails/${data.id}'}> */}  WRONG 

    return (



// <Link href={`/productDetails/${data.id}`}>

// {/* <section id="সব-পণ্য" className="py-10"> */}
<section id="all-products" className="py-10 scroll-mt-6">

        <div className='pt-30'>

        <h2 className='font-bold text-3xl p-2'>সব পণ্য</h2>
        <p className='text-gray-500'>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {data.map((item) => (
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

            <div className="mt-2">



                {/* In JSX, you cannot put a normal if statement directly inside {}.{} in JSX → expressions like condition ? ... : ...
                                                  if → use it outside JSX. */}
             <div>
                {item.change.dir === "up" ? <span className="badge badge-error">
                ▲ {item.change.pct}%
              </span> : <span className="badge badge-success">
                ▼ {item.change.pct}%
              </span>}
                
             </div>

              <span className="ml-2 text-sm text-gray-500">
                গতকাল ৳{item.yesterday}
              </span>
            </div>

          </div>
        </div>
      </Link>
  ))}

    </div>
        </div>
        </section>
        // </Link>
    );
};

export default AllProducts;