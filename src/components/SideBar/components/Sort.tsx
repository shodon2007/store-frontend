import { FC, memo } from "react";
import Select, { Options, SingleValue } from "react-select";
import MySubtitle from "../../UI/subtitle/MySubtitle";
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
            <MySubtitle>Сортировка</MySubtitle>
            <Select
                options={options}
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
            />
        </div>
    );
});

export default Sort;
