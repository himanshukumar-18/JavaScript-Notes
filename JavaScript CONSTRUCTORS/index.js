console.log("Learn JavaScript CLASSES");

class Product{
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2 )}`);
    }

    selsTax() {
        return this.price + (this.price * selsTax)
    }
}

let selsTax = 0.05;

const productOne = new Product("Mouse", 155.44);
const productTwo = new Product("Keyboard", 185.44);
const productThree = new Product("CPU", 205.44);
const productFour = new Product("UPS", 500.44);
const productFive = new Product("Pendrive", 100.44);
const productSix = new Product("Phone Holder", 50.44);

// productOne.displayProduct()
// productTwo.displayProduct()
// productThree.displayProduct()
// productFour.displayProduct()
// productFive.displayProduct()

const total = productOne.selsTax(selsTax)
console.log(total.toFixed(2 ));



