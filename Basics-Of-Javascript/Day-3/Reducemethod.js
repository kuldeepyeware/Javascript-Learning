const userCart = [
    {productId:1, productType:"Laptop", productPrice: 35000},
    {productId:2, productType:"TV", productPrice: 50000},
    {productId:3, productType:"Mobile", productPrice: 80000}
]

const total = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.productPrice;
},0)

console.log(total);