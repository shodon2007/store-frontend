import { FC, memo } from "react";
import Select from "react-select";
import MySubtitle from "../../UI/subtitle/MySubtitle";
import { useBrand } from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { TypeForm } from "../../../types/side";

type TypeBrand = {
    setForm: any;
};

const Brand: FC<TypeBrand> = memo(({ setForm }) => {
    const { type } = useParams();
    if (!type) {
        return "fuck";
    }
    const { data } = useBrand(type);
    if (!data) {
        return "";
    }

    const options = data.map((brand) => ({
        value: brand,
        label: brand,
    }));

    return (
        <div>
            <MySubtitle>Бренды</MySubtitle>
            <Select
                options={options}
                isMulti={true}
                onChange={(brands) => {
                    setForm((prew: TypeForm) => {
                        const copyPrew = { ...prew };
                        copyPrew.brands = brands.map((item) => item.value);
                        return copyPrew;
                    });
                }}
            />
            {/* <form onSubmit={(e) => e.preventDefault()}>
                <select
                    defaultValue="all"
                    // onChange={(e) =>
                        // setForm((prew: TypeForm) => {
                        //     const copyPrew = { ...prew };
                        //     copyPrew.brands = e.target.value;
                        //     return copyPrew;
                        // })
                    // }
                >
                    <option selected value="all">
                        все
                    </option>
                    {data.map((item) => {
                        return (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </form> */}
        </div>
    );
});

export default Brand;
