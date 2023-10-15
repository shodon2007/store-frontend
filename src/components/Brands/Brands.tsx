import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { useBrand } from "../../hooks/useProducts";
import { TypeForm } from "../../types/side";

import classes from "./styles.module.scss";

type TypeBrands = {
    setForm: any;
    refetch: () => void;
    form: TypeForm;
};

function changeActiveButton(brands: string[], deleteBrand: string): string[] {
    return brands.filter((item) => item !== deleteBrand);
}

function deleteAllTrigger(brands: string[]): string[] {
    return brands.filter((brand) => brand !== "all");
}

function checkButtonActive(brands: string[], brand: string): boolean {
    return brands.includes(brand);
}

const Brands: FC<TypeBrands> = memo(({ setForm, refetch, form }) => {
    const { type } = useParams();
    if (!type) {
        return "fuck";
    }
    const { data } = useBrand(type);
    if (!data) {
        return "";
    }

    const brandClick = async (brand: string) => {
        await setForm((prew: TypeForm) => {
            const copyPrew = { ...prew };
            const { brands } = copyPrew;
            const isbuttonActive = checkButtonActive(brands, brand);

            if (isbuttonActive) {
                copyPrew.brands = changeActiveButton(brands, brand);
            }
            if (!isbuttonActive) {
                copyPrew.brands = deleteAllTrigger(brands);
                copyPrew.brands.push(brand);
            }

            return copyPrew;
        });
        refetch();
    };

    return (
        <div className={classes.bar}>
            {data.map((brand) => {
                const selected = checkButtonActive(form.brands, brand);
                const buttonStyles = [classes.item];
                if (selected) {
                    buttonStyles.push(classes.active);
                }
                return (
                    <div
                        key={brand}
                        className={buttonStyles.join(" ")}
                        onClick={() => brandClick(brand)}
                    >
                        {brand}
                    </div>
                );
            })}
        </div>
    );
});

export default Brands;
