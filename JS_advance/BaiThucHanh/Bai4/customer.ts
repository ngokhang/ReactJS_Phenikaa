import Product from "./product";

class Customer {
  private name: string;
  private quantityOfProduct: number;

  constructor(name: string, quantityOfProduct: number = 0) {
    this.name = name;
    this.quantityOfProduct = quantityOfProduct;
  }

  public buyProduct(product: Product, quantityOfProduct: number): void {
    if (product.getAmount() > quantityOfProduct) {
      product.setAmount(product.getAmount() - quantityOfProduct);
    } else {
      console.log('Out of product');
      return;
    }
  }

  public toString(): string {
    return `
      Customer : ${this.name} | Buy : ${this.quantityOfProduct}
    `
  }
}

export default Customer;