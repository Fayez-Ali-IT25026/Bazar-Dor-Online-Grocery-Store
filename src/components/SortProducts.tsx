"use client";

import { useState } from "react";

const SortProducts = ({ products }) => {
  const [sort, setSort] = useState("default");

  // Bengali number → English number
  const toEnglishNumber = (value) => {
    if (typeof value === "number") return value;

    const banglaDigits = "০১২৩৪৫৬৭৮৯";
    const englishDigits = "0123456789";

    const converted = String(value).replace(/[০-৯]/g, (digit) => {
      return englishDigits[banglaDigits.indexOf(digit)];
    });

    return Number(converted);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") {
      return toEnglishNumber(a.today) - toEnglishNumber(b.today);
    }

    if (sort === "high") {
      return toEnglishNumber(b.today) - toEnglishNumber(a.today);
    }

    return 0;
  });

  return (
    <>
      {/* Sort */}
      <div className="flex items-center justify-end gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm">
        <span className="text-gray-500">সাজান</span>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-9 outline-none"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>

          {/* Chevron */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            ▼
          </span>
        </div>
      </div>

      {/* Product count */}
      <p className="text-xs text-gray-500">
        মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Products */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                {p.image}
              </div>

              <div>
                <h2 className="font-semibold">{p.nameBn}</h2>
                <p className="text-xs text-gray-500">
                  প্রতি {p.unit}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-500">আজকের দাম</p>

                <p className="text-lg font-bold">
                  {p.today} টাকা
                </p>
              </div>

              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  p.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : p.change.dir === "down"
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {p.change.dir === "up"
                  ? "▲"
                  : p.change.dir === "down"
                  ? "▼"
                  : "—"}{" "}
                {Math.abs(p.change.pct)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SortProducts;