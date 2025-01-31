/**
 * Fetches and renders all products on load from dummyjson.com 
 * Handles events for filtering through a form and sorting through a select 
 * 
*/

import { getAllProducts } from "./modules/dummyjsonapi.js";
import { renderProducts } from "./modules/gui.js";
import { filterCategory, filterMaxPrice } from "./modules/filtering.js";
import { getSortedProducts } from "./modules/sorting.js";

/** DOM Elements */
const sortSelect = document.querySelector('#sortSelect');
const filterForm = document.querySelector('#filterForm')

/*** Load and Render products ***/
let products;
let filteredProducts;

const loadProducts = async () => {
    try {
        products = await getAllProducts();
        renderProducts(products);
    }
    catch (error) {
        console.error(error)
    }
}
loadProducts();



/*** Filter using filter form data ***/
filterForm.addEventListener('submit', event =>{
    event.preventDefault();

    const category = filterForm.querySelector('select').value;
    const maxPrice = filterForm.querySelector('input').value;
    
    if(category) filteredProducts = filterCategory(products, category);
    else filteredProducts = products;

    if(maxPrice) filteredProducts = filterMaxPrice(filteredProducts, maxPrice);

    const sortedProducts = getSortedProducts(filteredProducts, sortSelect.value);

    renderProducts(sortedProducts);
})


/*** Sort using sort select ***/
sortSelect.addEventListener('change', ()=>{
    
    const sortedProducts = getSortedProducts(filteredProducts, sortSelect.value);
    renderProducts(sortedProducts)
})

