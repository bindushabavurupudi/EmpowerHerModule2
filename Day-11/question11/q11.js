function processProducts(obj){
    let proNames = obj.map( x => x.name);
    obj.forEach((x) => {
        if(x.price > 50) console.log(`${x.name} is above $50`);
        else console.log(`${x.name} is below $50`);
    });
}
let obj = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
processProducts(obj)