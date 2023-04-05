const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

// const numbers = [20, 24, 536, 98, 45];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce( sumReducer,0);

// const items = [
//     {id: 1, name: 'mukta', profassion: 'Shoinik', income: 2654},
//     {id: 2, name: 'mukta', profassion: 'Shoinik', income: 2654},
//     {id: 3, name: 'mukta', profassion: 'Shoinik', income: 2654},
//     {id: 4, name: 'mukta', profassion: 'Shoinik', income: 2654},
//     {id: 5, name: 'mukta', profassion: 'Shoinik', income: 2654},
//     {id: 6, name: 'mukta', profassion: 'Engineer', income: 2654},
// ]
// const itemSumReducer = (previous, current) => previous + current.income;
// const itemIncome = items.reduce(itemSumReducer, 0)

const getTotalPrice = products =>{
    const  reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
} 
export  {
    add, 
    multiply , 
    getTotalPrice as getTotal
};