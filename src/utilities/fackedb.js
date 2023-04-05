// use local storage to mage data

const addToDb = id =>{
    let shoppingCart = {};
    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    // else{
    //     shoppingCart = {}
    // }
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// remove from cart
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        else{
            console.log('nop')
        }
    }
}

// delete shopping cart

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export {addToDb, removeFromDb, deleteShoppingCart}