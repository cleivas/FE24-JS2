import Product from "./Product.js";

/**
 * Fetches all products from dummyjson.com
 * @returns Array of Product
 */

export const getAllProducts = async () => {
    const url = 'https://dummyjson.com/products';

    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error();
        
        const data = await res.json();

        const products = [];

        data.products.forEach(product => {
            products.push(new Product(product));
        })

        return products;
    }
    catch(error){
        throw new Error('Error fetching products')
    }

}