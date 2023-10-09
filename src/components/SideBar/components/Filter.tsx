import { FC, memo } from "react";
import { TypeForm, TypeSide } from "../../../types/side";
import Select from "react-select";

type TypeFilter = {
    data: TypeSide[];
    setForm: any;
    refetch: () => void;
};

const Filter: FC<TypeFilter> = memo(({ data, setForm, refetch }) => {
    async function changeFilter(
        filterList: string[],
        title: string
    ): Promise<void> {
        await setForm((prew: TypeForm) => {
            const copyPrew = { ...prew };
            copyPrew.filter[title] = filterList;
            return prew;
        });
        refetch();
    }

    return data.map((item: TypeSide) => {
        if (!item.title || !item || !item.descriptions) {
            return "";
        }

        const options = item.descriptions.map((item) => {
            return {
                value: item,
                label: item,
            };
        });
        return (
            <div key={item.title}>
                <Select
                    options={options}
                    isSearchable={false}
                    isMulti={true}
                    placeholder={item.title}
                    onChange={(value) =>
                        changeFilter(
                            value.map((item) => item.value),
                            item.title
                        )
                    }
                />
            </div>
        );
    });
});

export default Filter;
