"use strict";
exports.__esModule = true;
var customer_2 = require("./customer");
var product_2 = require("./product");
var product_1 = new product_2["default"]("Product 1", 20000, 4);
var customer_1 = new customer_2["default"]("Ngo Phu Khang", 2);
customer_1.buyProduct(product_1, 6);
