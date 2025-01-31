/**
 * Represents a product.
 * 
 * This class encapsulates all information.
 * It provides methods to get the product details and update its stock.
 * The class calculates the discounted price based on the discount percentage.
 * 
 * @class Product
 * @property {string} #title 
 * @property {string} #thumbnail - URL of the product's thumbnail image.
 * @property {number} #stock 
 * @property {number} #price - The original price of the product.
 * @property {number} #discountPercentage 
 * @property {string} #category 
 * @property {number} #rating - (out of 5).
 * @property {number} #discountedPrice - The price after applying the discount, rounded to two decimals.
 */
 
export default class Product{
    #title;
    #thumbnail;
    #stock;
    #price;
    #discountPercentage;
    #discountedPrice;
    #category;
    #rating;

    constructor({title, thumbnail, stock, price, discountPercentage, category, rating}){
        this.#title = title;
        this.#thumbnail = thumbnail;
        this.#stock = stock;
        this.#price = price;
        this.#discountPercentage = discountPercentage;
        this.#category = category;
        this.#rating = rating;
        this.#discountedPrice = this.#calculateDiscountedPrice();
    }

    #calculateDiscountedPrice(){
        let discountedPrice = this.#price - (this.#price * (this.#discountPercentage * 0.01));
        
        discountedPrice = Math.round(discountedPrice*100)/100; // Round to two decimals and preserv the datatype

        return discountedPrice;
    }

    // Getters
    getTitle(){ return this.#title; }
    getThumbnailURL(){ return this.#thumbnail; }
    getStock(){ return this.#stock; }
    getCategory(){ return this.#category; }
    getRating(){ return this.#rating; }
    getDiscountedPrice(){ return this.#discountedPrice; }
    

    // Setters
    updateStock(){
        if(this.#stock <= 0 )this.#stock = 0
        else this.#stock--;
    }
}
