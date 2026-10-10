import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import Link from 'next/link';

const page = async ({params}) => {

// await dete hobe
// const {productDetailsId} = params
const {slug} = await params







const session = await auth.api.getSession({
  headers: await headers(),
});

if (!session) {
  redirect("/singin");
}


// const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${slug}`);
const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${slug}`);

if (!res.ok) {
  notFound();
}

const p = await res.json();

if (
  !p ||
  !p.nameBn ||
  !Array.isArray(p.markets) ||
  p.markets.length === 0
) {
  notFound();
}




// const p = await res.json();
// console.log(p)










   return (
  // <div className="max-w-4xl mx-auto p-4">

  //   <p className="text-sm text-gray-500 mb-4">
  //     হোম &gt; {p.categoryNameBn} &gt; {p.nameBn}
  //   </p>

  //   {/* Product Information */}
  //   <div className="border rounded-lg p-5 mb-5">
      
  //     <div className="flex items-center gap-4">
  //       <div className="text-5xl">
  //         {p.image}
  //       </div>

  //       <div>
  //         <h1 className="text-2xl font-bold">
  //           {p.nameBn}
  //         </h1>

  //         <p className="text-gray-500">
  //           {p.categoryNameBn}
  //         </p>

  //         <p>
  //           আজকের দাম: {p.today} টাকা
  //         </p>
  //       </div>
  //     </div>

  //   </div>


  //   {/* Price Summary */}
  //   <div className="border rounded-lg p-5 mb-5">

  //     <h2 className="text-xl font-bold mb-4">
  //       দামের সারসংক্ষেপ
  //     </h2>

  //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

  //       <div className="border rounded-lg p-4">
  //         <p className="text-gray-500">সর্বনিম্ন দাম</p>

  //         <p className="text-xl font-bold">
  //           {Math.min(...p.markets.map(m => m.min))} টাকা
  //         </p>
  //       </div>


  //       <div className="border rounded-lg p-4">
  //         <p className="text-gray-500">সর্বোচ্চ দাম</p>

  //         <p className="text-xl font-bold">
  //           {Math.max(...p.markets.map(m => m.max))} টাকা
  //         </p>
  //       </div>


  //       <div className="border rounded-lg p-4">
  //         <p className="text-gray-500">আজকের দাম</p>

  //         <p className="text-xl font-bold">
  //           {p.today} টাকা
  //         </p>
  //       </div>

  //     </div>

  //   </div>


  //   {/* Market Prices */}
  //   <div className="border rounded-lg p-5">

  //     <h2 className="text-xl font-bold mb-4">
  //       বাজারভিত্তিক দাম
  //     </h2>

  //     <table className="w-full border">

  //       <thead>
  //         <tr className="border-b">
  //           <th className="p-2 text-left">বাজার</th>
  //           <th className="p-2 text-left">বিভাগ</th>
  //           <th className="p-2">সর্বনিম্ন</th>
  //           <th className="p-2">সর্বোচ্চ</th>
  //         </tr>
  //       </thead>

  //       <tbody>

  //         {p.markets.map((m, i) => (

  //           <tr key={i} className="border-b">

  //             <td className="p-2">
  //               {m.market}
  //             </td>

  //             <td className="p-2">
  //               {m.division}
  //             </td>

  //             <td className="p-2 text-center">
  //               {m.min} টাকা
  //             </td>

  //             <td className="p-2 text-center">
  //               {m.max} টাকা
  //             </td>

  //           </tr>

  //         ))}

  //       </tbody>

  //     </table>

  //   </div>

  // </div>





<main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50 px-4 py-8 sm:px-6 lg:py-12">
    <div className="mx-auto max-w-6xl">

      {/* Breadcrumb */}
      <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="transition hover:text-green-700">
          হোম
        </Link>
        <span>/</span>
        <span>{p.categoryNameBn}</span>
        <span>/</span>
        <span className="font-semibold text-green-800">{p.nameBn}</span>
      </div>

      {/* Product Hero */}
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-green-100/60 blur-3xl" />

        <div className="relative flex flex-col gap-6 p-6 sm:p-9 md:flex-row md:items-center">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-green-100 to-emerald-50 text-6xl shadow-inner sm:h-36 sm:w-36 sm:text-7xl">
            {p.image || p.categoryIcon || "🛒"}
          </div>

          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                {p.categoryIcon} {p.categoryNameBn}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                প্রতি {p.unit === "kg" ? "কেজি" : p.unit === "litre" ? "লিটার" : p.unit === "dozen" ? "ডজন" : p.unit === "piece" ? "পিস" : p.unit || "একক"}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {p.nameBn}
            </h1>

            <p className="mt-3 max-w-xl leading-7 text-gray-500">
              বিভিন্ন বাজারের আজকের দাম দেখুন এবং আপনার কাছাকাছি বাজারের দামের সঙ্গে তুলনা করুন।
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm">
                <span>●</span> আজকের বাজারদর
              </span>
              <span className="text-sm text-gray-500">
                {p.markets.length}টি বাজারের তথ্য
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50 p-5 md:min-w-44">
            <p className="text-sm font-medium text-green-800">আজকের দাম</p>
            <p className="mt-2 text-3xl font-extrabold text-green-700">
              ৳{p.today}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              প্রতি {p.unit === "kg" ? "কেজি" : p.unit === "litre" ? "লিটার" : p.unit === "dozen" ? "ডজন" : p.unit === "piece" ? "পিস" : p.unit || "একক"}
            </p>
            {p.change && (
              <p className={`mt-3 text-sm font-bold ${p.change.dir === "up" ? "text-red-600" : p.change.dir === "down" ? "text-green-700" : "text-gray-500"}`}>
                {p.change.dir === "up" ? "↑" : p.change.dir === "down" ? "↓" : "→"}{" "}
                {p.change.pct}% {p.change.dir === "up" ? "বৃদ্ধি" : p.change.dir === "down" ? "হ্রাস" : "পরিবর্তন"}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Price Summary */}
      <section className="mb-10">
        <div className="mb-5">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Price Overview
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
            দামের সারসংক্ষেপ
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            বিভিন্ন বাজারের দামের একটি সংক্ষিপ্ত তুলনা।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Minimum */}
          <div className="group rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  সর্বনিম্ন দাম
                </p>
                <p className="mt-3 text-3xl font-extrabold text-green-700">
                  ৳{Math.min(...p.markets.map((m) => m.min))}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                ↓
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              প্রতি {p.unit === "kg" ? "কেজি" : p.unit === "litre" ? "লিটার" : p.unit === "dozen" ? "ডজন" : p.unit === "piece" ? "পিস" : p.unit || "একক"}
            </p>
          </div>

          {/* Maximum */}
          <div className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  সর্বোচ্চ দাম
                </p>
                <p className="mt-3 text-3xl font-extrabold text-red-600">
                  ৳{Math.max(...p.markets.map((m) => m.max))}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                ↑
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              প্রতি {p.unit === "kg" ? "কেজি" : p.unit === "litre" ? "লিটার" : p.unit === "dozen" ? "ডজন" : p.unit === "piece" ? "পিস" : p.unit || "একক"}
            </p>
          </div>

          {/* Today's Price */}
          <div className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  আজকের দাম
                </p>
                <p className="mt-3 text-3xl font-extrabold text-blue-700">
                  ৳{p.today}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                ৳
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              প্রতি {p.unit === "kg" ? "কেজি" : p.unit === "litre" ? "লিটার" : p.unit === "dozen" ? "ডজন" : p.unit === "piece" ? "পিস" : p.unit || "একক"}
            </p>
          </div>
        </div>
      </section>

      {/* Market Prices */}
      <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-gray-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Market Comparison
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
              বাজারভিত্তিক আজকের দাম
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              প্রতিটি বাজারের সর্বনিম্ন ও সর্বোচ্চ মূল্য তুলনা করুন।
            </p>
          </div>

          <span className="w-fit rounded-xl bg-green-50 px-4 py-2 text-sm font-bold text-green-800">
            {p.markets.length}টি বাজার
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <th className="px-6 py-4 font-bold">বাজারের নাম</th>
                <th className="px-6 py-4 font-bold">বিভাগ</th>
                <th className="px-6 py-4 font-bold">সর্বনিম্ন দাম</th>
                <th className="px-6 py-4 font-bold">সর্বোচ্চ দাম</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {p.markets.map((m, i) => (
                <tr
                  key={`${m.market}-${i}`}
                  className="transition hover:bg-green-50/60"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-lg">
                        🏪
                      </div>
                      <span className="font-semibold text-gray-800">
                        {m.market}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                      {m.division}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span className="font-bold text-green-700">
                      ৳{m.min}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span className="font-bold text-red-600">
                      ৳{m.max}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-gray-100 bg-gray-50/80 px-6 py-4">
          <p className="text-xs leading-5 text-gray-500">
            * বাজারভিত্তিক দাম API-তে থাকা তথ্য অনুযায়ী দেখানো হচ্ছে। দাম ও প্রাপ্যতা বাজারভেদে পরিবর্তিত হতে পারে।
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-white px-5 py-3 font-bold text-green-800 shadow-sm transition hover:border-green-700 hover:bg-green-700 hover:text-white"
        >
          <span>←</span> হোম পেজে ফিরে যান
        </Link>
      </div>

    </div>
  </main>


);
};

export default page;