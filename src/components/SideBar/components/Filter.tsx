import { FC, memo } from "react";
import {
    TypeChangeFilter,
    TypeFilter,
    TypeForm,
    TypeSide,
} from "../../../types/side";
import Select from "react-select";
import { useFilter } from "../../../hooks/useFilter";
import { useParams } from "react-router-dom";
import Loading from "../../../pages/Loading";

const Filter: FC<TypeFilter> = memo(({ setForm, refetch }) => {
    const { type } = useParams();
    const { isFetching, data } = useFilter(type);

    if (isFetching) {
        return <Loading />;
    }

    if (!data || data.length === 0) {
        return <div></div>;
    }

    const changeFilter: TypeChangeFilter = async (title, filterList) => {
        await setForm((prew: TypeForm) => {
            const copyPrew = { ...prew };
            copyPrew.filter[title] = filterList;
            return prew;
        });
        refetch();
    };

    return data.map(({ title, descriptions }: TypeSide) => {
        if (!title || !descriptions) {
            return "";
        }

        const options = descriptions.map((item) => ({
            value: item,
            label: item,
        }));

        return (
            <Select
                key={title}
                options={options}
                isSearchable={false}
                isMulti={true}
                placeholder={title}
                onChange={(value) =>
                    changeFilter(
                        title,
                        value.map((item) => item.value)
                    )
                }
            />
        );
    });
});

export default Filter;
