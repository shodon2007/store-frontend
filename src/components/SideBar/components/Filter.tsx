import { FC } from "react";
import Checkbox from "./Checkbox";
import MySubtitle from "../../UI/subtitle/MySubtitle";
import { TypeForm, TypeSide } from "../../../types/side";

type TypeFilter = {
    data: TypeSide[];
    setForm: any;
};

const Filter: FC<TypeFilter> = ({ data, setForm }) => {
    function changeFilter(
        attribute: string,
        title: string,
        checked: boolean
    ): void {
        setForm((prevForm: TypeForm) => {
            const updatedForm = { ...prevForm };

            if (!(title in updatedForm.filter)) {
                updatedForm.filter[title] = [];
            }

            if (checked) {
                updatedForm.filter[title].push(attribute);
            } else {
                updatedForm.filter[title] = updatedForm.filter[title].filter(
                    (item) => item !== attribute
                );
            }

            return updatedForm;
        });
    }

    return data.map((item: TypeSide) => {
        if (!item.title || !item || !item.descriptions) {
            return "";
        }
        return (
            <div key={item.title}>
                <MySubtitle>{item.title}</MySubtitle>
                {item.descriptions.map((el, index) => {
                    return (
                        <Checkbox
                            changeFilter={changeFilter}
                            el={el}
                            key={index}
                            title={item.title}
                        />
                    );
                })}
            </div>
        );
    });
};

export default Filter;
