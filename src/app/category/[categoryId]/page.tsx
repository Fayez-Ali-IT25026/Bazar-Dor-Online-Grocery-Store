import React from 'react';

const CategoryProducts = async ({params}) => {


const {categoryId} = await params
const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`);
const data = await res.json();
console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default CategoryProducts;