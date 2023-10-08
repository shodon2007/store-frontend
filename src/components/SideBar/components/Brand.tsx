import { FC, memo } from "react";
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
    return (
        <div>
            <MySubtitle>Производитель</MySubtitle>
            <form onSubmit={(e) => e.preventDefault()}>
                <select
                    defaultValue="all"
                    onChange={(e) =>
                        setForm((prew: TypeForm) => {
                            const copyPrew = { ...prew };
                            copyPrew.brand = e.target.value;
                            return copyPrew;
                        })
                    }
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
            </form>
        </div>
    );
});

export default Brand;
