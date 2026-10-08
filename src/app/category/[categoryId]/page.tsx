import React from 'react';
import SortProducts from "@/components/SortProducts";

const CategoryProducts = async ({params}) => {


const {categoryId} = await params
// const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`);
const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`);

const data = await res.json();
console.log(data)

    return (
        <div>
            

 {/* <div className="mx-auto w-full max-w-5xl px-4 py-8">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((p) => (
        <div
          key={p.id}



// hover:-translate-y-1 hover:shadow-lg importent concept


          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-3xl">
              {p.image}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{p.nameBn}</h2>
              <p className="text-sm text-gray-500">প্রতি {p.unit}</p>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-2xl font-bold text-gray-900">
                {p.today} <span className="text-base font-medium">টাকা</span>
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                p.change.dir === 'up'
                  ? 'bg-red-50 text-red-600'
                  : p.change.dir === 'down'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {p.change.dir === 'up' ? '▲' : p.change.dir === 'down' ? '▼' : '—'}{' '}
              {Math.abs(p.change.pct)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  </div> */}



<div className="mx-auto w-full max-w-5xl space-y-4 px-4 py-6">
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4">
      <span className="text-4xl">{data[0]?.categoryIcon}</span>
      <div>
        <h1 className="text-xl font-bold">{data[0]?.categoryNameBn}</h1>
        <p className="text-xs text-gray-500">{data.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
      </div>
    </div>

    {/* <div className="flex items-center justify-end gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm">
      <span className="text-gray-500">সাজান</span>
      <select className="rounded-lg border border-gray-300 px-2 py-1">
        <option>ডিফল্ট</option>
      </select>
    </div>

    <p className="text-xs text-gray-500">মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((p) => (
        <div key={p.id} className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">{p.image}</div>
            <div>
              <h2 className="font-semibold">{p.nameBn}</h2>
              <p className="text-xs text-gray-500">প্রতি কেজি</p>
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-lg font-bold">{p.today} টাকা</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                p.change.dir === 'up' ? 'bg-red-50 text-red-600'
                : p.change.dir === 'down' ? 'bg-green-50 text-green-700'
                : 'bg-gray-100 text-gray-600'
              }`}
            >
              {p.change.dir === 'up' ? '▲' : p.change.dir === 'down' ? '▼' : '—'} {Math.abs(p.change.pct)}%
            </span>
          </div>
        </div>
      ))}
    </div> */}





<SortProducts products={data} />





  </div>




        </div>
    );
};

export default CategoryProducts;