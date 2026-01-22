/** @format */

describe("Class", () => {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;
    constructor(id: number, name: string, age?: number) {
      this.id = id;
      this.name = name;
    }
  }
  class Order {}
  it("it should can create class", () => {
    const customer: Customer = new Customer(1,"agung");
    customer.age = 20
    console.log(customer.id,customer.name,customer.age);
    console.log(customer);
    
    const order: Order = new Order();
  });
});
