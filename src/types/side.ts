export type TypeSide = {
    title: string,
    descriptions: string[]
}

export type TypeFilter = {
    [key: string]: string[],
}

export type TypePrice = {
    min: number,
    max: number,
}

export type TypeForm = {
    filter: TypeFilter;
    sort: string,
    price: TypePrice,
    brand: string,
}