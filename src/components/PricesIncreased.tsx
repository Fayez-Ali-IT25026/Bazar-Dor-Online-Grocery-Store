import React from 'react';
import Card from './Card';

const PricesIncreased = async () => {


const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
const data = await res.json()
// console.log(data)
const increasePrice = data
  .filter((item) => item.change.dir === "up")
  .slice(0, 6);


    return (
        <div>
            


{/* wrong  */}
{/* {data.map(c => (<Card key={data.id} data = {data}/>))} */}




{/* {data.map(c => (
  <Card key={c.id} data={c} />
))} */}




<Card data ={increasePrice} />





        </div>
    );
};

export default PricesIncreased;