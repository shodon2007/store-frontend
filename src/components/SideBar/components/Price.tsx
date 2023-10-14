import { FC } from "react";

import MyInput from "../../UI/input/MyInput";
import classes from "../SideBar.module.scss";
import { TypeForm } from "../../../types/side";

type Price = {
    setForm: any;
};

const Price: FC<Price> = ({ setForm }) => {
    return (
        <div className={classes.price}>
            <MyInput
                type="number"
                placeholder="цена от..."
                onChange={(e) =>
                    setForm((prew: TypeForm) => {
                        const copyPrew = { ...prew };
                        copyPrew.price.min = +e.target.value;
                        return copyPrew;
                    })
                }
            />
            <MyInput
                type="number"
                placeholder="цена до..."
                onChange={(e) =>
                    setForm((prew: TypeForm) => {
                        const copyPrew = { ...prew };
                        copyPrew.price.max = +e.target.value;
                        return copyPrew;
                    })
                }
            />
        </div>
    );
};

export default Price;
