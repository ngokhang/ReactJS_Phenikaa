"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    Product.prototype.addProduct = function (amountProduct) {
        this.amount += amountProduct;
    };
    Product.prototype.getAmount = function () {
        return this.amount;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setAmount = function (n) {
        this.amount = n;
    };
    return Product;
}());
exports["default"] = Product;
