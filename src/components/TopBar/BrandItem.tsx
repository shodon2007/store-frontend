import classes from "./styles.module.scss";

const BrandItem = ({ brand, selected, brandClick }) => {
    const itemClasses = [classes.item];
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
