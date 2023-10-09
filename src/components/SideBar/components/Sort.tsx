import { FC, memo } from "react";
import Select, { SingleValue } from "react-select";
import { TypeForm } from "../../../types/side";
import { TypeOption } from "../../../types/select";

type TypeSort = {
    setForm: any;
};

const options: TypeOption[] = [
    {
        value: "date",
        label: "по дате",
    },
    {
        value: "price",
        label: "по цене",
    },
    {
        value: "name",
        label: "по названию",
    },
];

const Sort: FC<TypeSort> = memo(({ setForm }) => {
    return (
        <div>
            <Select
                options={options}
                placeholder={"Сортировка"}
                onChange={(newValue: SingleValue<TypeOption>) => {
                    if (newValue === null) {
                        return;
                    }
                    setForm((prew: TypeForm) => {
                        const copyPrew = { ...prew };
                        copyPrew.sort = newValue.value;
                        return copyPrew;
                    });
                }}
                isSearchable={false}
            />
        </div>
    );
});

export default Sort;
