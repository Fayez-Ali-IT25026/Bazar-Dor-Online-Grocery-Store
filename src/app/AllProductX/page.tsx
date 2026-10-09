// import React from 'react';

// const AllProductX = async () => {


//   const res = await fetch(
//     "https://api.abcz.workers.dev/api/bazardor/products"
//   );

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch products");
// //   }

//   const data = await res.json();



//     return (
//         <div>
            


// <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {data.map((item: any) => (
//           <div
//             key={item.id}
//             className="card border bg-base-100 shadow-sm"
//           >
//             <div className="card-body">
//               {/* Product information */}
//               <div className="flex items-center gap-3">
//                 <div className="text-4xl">{item.image}</div>

//                 <div>
//                   <h2 className="card-title">{item.nameBn}</h2>
//                 </div>
//               </div>

//               {/* Today's price */}
//               <div className="mt-4">
//                 <p className="text-sm text-gray-500">
//                   আজকের দাম
//                 </p>

//                 <p className="text-3xl font-bold">
//                   ৳{item.today}
//                   <span className="text-sm font-normal">
//                     /{item.unit}
//                   </span>
//                 </p>
//               </div>

//               {/* Price change */}
//               <div className="mt-2 flex flex-wrap items-center gap-2">
//                 {item.change?.dir === "up" ? (
//                   <span className="badge badge-error">
//                     ▲ {Math.abs(item.change.pct)}%
//                   </span>
//                 ) : item.change?.dir === "down" ? (
//                   <span className="badge badge-success">
//                     ▼ {Math.abs(item.change.pct)}%
//                   </span>
//                 ) : (
//                   <span className="badge">
//                     — 0%
//                   </span>
//                 )}

//                 <span className="text-sm text-gray-500">
//                   গতকাল ৳{item.yesterday}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

// </div>
//     );
// };

// export default AllProductX;