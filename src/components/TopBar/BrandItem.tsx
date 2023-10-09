import classes from "./styles.module.scss";

type TypeBrand = {
    brand: string;
    selected: boolean;
    brandClick: (brand: string) => void;
};

const BrandItem = ({ brand, selected, brandClick }: TypeBrand) => {
    const itemClasses = [classes.item];
    console.log(selected);
    if (selected) {
        itemClasses.push(classes.active);
    }
    return (
        <div
            className={itemClasses.join(" ")}
            onClick={() => brandClick(brand)}
        >
            {brand}
        </div>
    );
};

export default BrandItem;
