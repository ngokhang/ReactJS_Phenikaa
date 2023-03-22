import Customer from "./customer";
import Product from "./product";

let product_1 = new Product("Product 1", 20000, 4);
let customer_1 = new Customer("Ngo Phu Khang", 2);
customer_1.buyProduct(product_1, 6);