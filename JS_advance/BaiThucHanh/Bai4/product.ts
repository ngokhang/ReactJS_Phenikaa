class Product {
  private name: string;
  private price: number;
  private amount: number;

  constructor(name: string, price: number, amount: number) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  public addProduct(amountProduct: number): void {
    this.amount += amountProduct;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getPrice(): number {
    return this.price;
  }

  public getName(): string {
    return this.name;
  }

  public setAmount(n: number): void {
    this.amount = n;
  }
}

export default Product;