import React from 'react';
import Card from './Card';
import Link from 'next/link';
import type { Product } from "@/types/product";

const PricesIncreased = async () => {


// const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
// const data = await res.json()
const data: Product[] = await res.json();
// console.log(data)
const increasePrice = data
  .filter((item) => item.change.dir === "up")
  .slice(0, 6);


    return (

      // <Link href={`/productDetails/${data.id}`}>
        <div className='pt-10'>
            


{/* wrong  */}
{/* {data.map(c => (<Card key={data.id} data = {data}/>))} */}




{/* {data.map(c => (
  <Card key={c.id} data={c} />
))} */}




<Card data  ={increasePrice} />





        </div>
      //  </Link>
    );
};

export default PricesIncreased;