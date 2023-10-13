import { FC, memo } from "react";
import Select from "react-select";
import { TypeChangeSort, TypeForm } from "../../../types/side";
import options from "./sort-options.json";

interface ISort {
    setForm: any;
}

const Sort: FC<ISort> = memo(({ setForm }) => {
    const changeSort: TypeChangeSort = (changeValue) => {
        setForm((prew: TypeForm) => {
            const copyPrew = { ...prew };
            copyPrew.sort = changeValue ? changeValue.value : copyPrew.sort;
            return copyPrew;
        });
    };

    return (
        <Select
            isSearchable={false}
            options={options}
            placeholder={"Сортировка"}
            onChange={changeSort}
        />
    );
});

export default Sort;
