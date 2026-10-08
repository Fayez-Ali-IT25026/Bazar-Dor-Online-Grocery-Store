import React from 'react';

const Card = ({data}) => {


// data is not an array, so .filter() cannot be used on it..filter() works only on arrays:
// const increasePrice = data.filter((n: any) => n.dir === "up" );




// This gives true or false.
// const increasePrice = data.change.dir === "up";



// const increasePrice = data.filter(
//   (item) => item.change.dir === "up"
// );



//show only 6 product
// const increasePrice = data
//   .filter((item) => item.change.dir === "up")
//   .slice(0, 6);



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {data.map((item) => (
        <div
          key={item.id}
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

                <p className="text-sm text-gray-500">
                  {item.categoryIcon} {item.categoryNameBn}
                </p>
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
              <span className="badge badge-error">
                ▲ {item.change.pct}%
              </span>

              <span className="ml-2 text-sm text-gray-500">
                গতকাল ৳{item.yesterday}
              </span>
            </div>

          </div>
        </div>
      ))}

    </div>
    );
};

export default Card;