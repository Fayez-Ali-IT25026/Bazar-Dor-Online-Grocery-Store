import React from 'react';

const page = async ({params}) => {

// await dete hobe
// const {productDetailsId} = params
const {productDetailsId} = await params

const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productDetailsId}`);

const p = await res.json();
// console.log(p)










   return (
  <div className="max-w-4xl mx-auto p-4">

    <p className="text-sm text-gray-500 mb-4">
      হোম &gt; {p.categoryNameBn} &gt; {p.nameBn}
    </p>

    {/* Product Information */}
    <div className="border rounded-lg p-5 mb-5">
      
      <div className="flex items-center gap-4">
        <div className="text-5xl">
          {p.image}
        </div>

        <div>
          <h1 className="text-2xl font-bold">
            {p.nameBn}
          </h1>

          <p className="text-gray-500">
            {p.categoryNameBn}
          </p>

          <p>
            আজকের দাম: {p.today} টাকা
          </p>
        </div>
      </div>

    </div>


    {/* Price Summary */}
    <div className="border rounded-lg p-5 mb-5">

      <h2 className="text-xl font-bold mb-4">
        দামের সারসংক্ষেপ
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="border rounded-lg p-4">
          <p className="text-gray-500">সর্বনিম্ন দাম</p>

          <p className="text-xl font-bold">
            {Math.min(...p.markets.map(m => m.min))} টাকা
          </p>
        </div>


        <div className="border rounded-lg p-4">
          <p className="text-gray-500">সর্বোচ্চ দাম</p>

          <p className="text-xl font-bold">
            {Math.max(...p.markets.map(m => m.max))} টাকা
          </p>
        </div>


        <div className="border rounded-lg p-4">
          <p className="text-gray-500">আজকের দাম</p>

          <p className="text-xl font-bold">
            {p.today} টাকা
          </p>
        </div>

      </div>

    </div>


    {/* Market Prices */}
    <div className="border rounded-lg p-5">

      <h2 className="text-xl font-bold mb-4">
        বাজারভিত্তিক দাম
      </h2>

      <table className="w-full border">

        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">বাজার</th>
            <th className="p-2 text-left">বিভাগ</th>
            <th className="p-2">সর্বনিম্ন</th>
            <th className="p-2">সর্বোচ্চ</th>
          </tr>
        </thead>

        <tbody>

          {p.markets.map((m, i) => (

            <tr key={i} className="border-b">

              <td className="p-2">
                {m.market}
              </td>

              <td className="p-2">
                {m.division}
              </td>

              <td className="p-2 text-center">
                {m.min} টাকা
              </td>

              <td className="p-2 text-center">
                {m.max} টাকা
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
);
};

export default page;