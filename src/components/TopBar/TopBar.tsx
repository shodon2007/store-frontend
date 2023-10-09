import { FC, memo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useBrand } from "../../hooks/useProducts";
import { TypeForm } from "../../types/side";
import BrandItem from "./BrandItem";

import classes from "./styles.module.scss";

type TypeTopBar = {
    setForm: any;
    refetch: () => void;
    form: TypeForm;
};

const TopBar: FC<TypeTopBar> = memo(({ setForm, refetch, form }) => {
    const brandClick = useCallback(
        async (brand: string) => {
            await setForm((prew) => {
                const copyPrew = { ...prew };
                if (copyPrew.brands.includes(brand)) {
                    copyPrew.brands = copyPrew.brands.filter(
                        (item) => item !== brand
                    );
                } else {
                    copyPrew.brands = copyPrew.brands.filter(
                        (item) => item !== "all"
                    );
                    copyPrew.brands.push(brand);
                }

                return copyPrew;
            });
            console.log(form);
            refetch();
        },
        [form]
    );
    const { type } = useParams();
    if (!type) {
        return "fuck";
    }
    const { data } = useBrand(type);
    if (!data) {
        return "";
    }

    return (
        <div className={classes.bar}>
            {data.map((brand) => {
                return (
                    <BrandItem
                        brand={brand}
                        selected={form.brands.includes(brand)}
                        brandClick={brandClick}
                    />
                );
            })}
        </div>
    );
});

export default TopBar;
