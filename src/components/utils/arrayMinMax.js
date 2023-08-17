export default function getMinMax(products) {
    products = products.map(product => product.price);
    return {
        min: Math.min(...products),
        max: Math.max(...products),
    }
}