const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];

const products1 = products.map((obj) =>{
    if(obj.price > 100){
        return {...obj, price:0.9*obj.price};
    }
    return obj;
});


const products2 = products1.filter((obj,i)=>{
    if(obj.price !== products[i].price){
        return obj;
    }
});

products2.forEach((obj) =>{
    console.log("Product Name:"+obj.name,",","Updated Price:"+obj.price);
})

