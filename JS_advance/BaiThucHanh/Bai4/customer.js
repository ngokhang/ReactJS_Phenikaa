"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(name, quantityOfProduct) {
        if (quantityOfProduct === void 0) { quantityOfProduct = 0; }
        this.name = name;
        this.quantityOfProduct = quantityOfProduct;
    }
    Customer.prototype.buyProduct = function (product, quantityOfProduct) {
        if (product.getAmount() > quantityOfProduct) {
            product.setAmount(product.getAmount() - quantityOfProduct);
        }
        else {
            console.log('Out of product');
            return;
        }
    };
    Customer.prototype.toString = function () {
        return "\n      Customer : ".concat(this.name, " | Buy : ").concat(this.quantityOfProduct, "\n    ");
    };
    return Customer;
}());
exports["default"] = Customer;
