import { SingleValue } from "react-select";
import { TypeOption } from "./select";

export type TypeSide = {
    title: string,
    descriptions: string[]
}

export type TypePrice = {
    min: number,
    max: number,
}

export type TypeFilterItems = {
    [key: string]: string[];
}

export type TypeForm = {
    filter: TypeFilterItems;
    sort: string,
    price: TypePrice,
    brands: string[],
}

export type TypeChangeSort = (newValue: SingleValue<TypeOption>) => void;

export type TypeFilter = {
    setForm: any;
    refetch: () => void;
};

export type TypeChangeFilter = (title: string, filterList: string[]) => Promise<void>;
