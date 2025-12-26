// array methods - map, filter, reduce, sort, fi

// Map- used to transform each element in an array
// const numbers = [1, 2, 3, 4, 5];
// const Double= numbers.map(function(num){
//     return num*2;
// });
// console.log(Double);

// const items=[
//     {name:"T-shirt",price:1000},
//     {name:"Shoes",price:2500},
//     {name:"Cap",price:500},
// ]
// const Vat=items.map(function(product){
//     return {
//         ...product,
//         Vat:product.price+product.price*0.13
//     }
// });
// console.log(Vat);

// Filter- used to filter elements based on a condition

// const ages=[5,12,17,18,24,32,45,60];
// const kid=ages.filter(function(age){
//     return age<=18;
// })
// console.log(kid);

// Reduce- used to reduce an array to a single value

// const scores=[10,20,30,40,50];
// const total= scores.reduce(function(sum,score){
//     return sum+score;
// });

// console.log(total);

// Find- used to find the first element that matches a condition

// const marks=[8,70,85,90,75,80];
// const FirstGreaterthan10= marks.find(function(num){
//     return num>50;
// });
// console.log(FirstGreaterthan10);

// sort- used to sort elements in an array

// const scores=[50,20,80,10,70,30,60,40];
// const ascending=scores.sort(function(a,b){
//     return b-a;
// })

// console.log(ascending);

// Task
const items=[
    {name:"Laptop",price:100000,rating:4.5,inStock:true},
    {name:"Mobile",price:80000,rating:4.7,inStock:true},
    {name:"Tablet",price:30000,rating:3.5,inStock:false},
    {name:"PC",price:120000,rating:2.1,inStock:true},
]

const filterItems=items.filter(function(item){
    return item.price<100000 && item.rating>4.5 && item.inStock===true && item.name.startsWith("M");
});

console.log(filterItems.map(function(item){
    return item.name;
}));