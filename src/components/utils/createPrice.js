export default function createPrice(price) {
    price = price.toString().split('').reverse();
    price = price.map((letter, index) => {
        if (Number.isInteger((index + 1) / 3)) {
            return " " + letter;
        }

        return letter;
    })
    price = price.reverse().join('')
    return price + ' ₽';
}