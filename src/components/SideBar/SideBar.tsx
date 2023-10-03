import { FC, useEffect } from "react";
import { useFilter } from "../../hooks/useFilter";
import { useParams } from "react-router-dom";
import classes from "./SideBar.module.scss";
import Loading from "../../pages/Loading";
import MySubtitle from "../UI/subtitle/MySubtitle";
import MyText from "../UI/text/MyText";
import MyButton from "../UI/button/MyButton";
import { TypeForm, TypeSide } from "../../types/side";

interface ISide {
    form: TypeForm;
    setForm: any;
    refetch: any;
}

const SideBar: FC<ISide> = ({ form, setForm, refetch }) => {
    console.log("рендер", form);
    const { type } = useParams();
    const { isFetching, data } = useFilter(type);

    useEffect(() => {
        console.log("ЕББАБААААТЬ РАБОТЕТ");
    }, [form]);

    if (isFetching) {
        return <Loading />;
    }

    if (!data) {
        return <div></div>;
    }

    function changeBox(attribute: string, title: string, checked: boolean) {
        function addAttribute() {
            setForm((prew: TypeForm) => {
                const updatedForm = { ...prew };
                updatedForm[title] = [...updatedForm[title], attribute];
                return updatedForm;
            });
        }

        function createAttribute() {
            setForm((prew: TypeForm) => {
                const updatedForm = { ...prew };
                updatedForm[title] = [];
                return updatedForm;
            });
        }

        function deleteAttribute() {
            setForm((prew: TypeForm) => {
                const updateForm = { ...prew };

                updateForm[title] = updateForm[title].filter(
                    (item) => item !== attribute
                );
                return updateForm;
            });
        }

        if (!checked) {
            return deleteAttribute();
        }
        if (title in form) {
            return addAttribute();
        }

        createAttribute();
        addAttribute();
    }

    return (
        <div className={classes.sidebar}>
            <div className={classes.list}>
                {data.map((item: TypeSide) => {
                    if (!item.title || !item || !item.descriptions) {
                        return "";
                    }
                    return (
                        <div key={item.title}>
                            <MySubtitle>{item.title}</MySubtitle>
                            {item.descriptions?.map((el, index) => {
                                return (
                                    <div
                                        className={classes.description}
                                        key={index}
                                    >
                                        <input
                                            type="checkbox"
                                            value={el}
                                            onChange={(e) => {
                                                changeBox(
                                                    e.target.value,
                                                    item.title,
                                                    e.target.checked
                                                );
                                            }}
                                        />
                                        <MyText>{el}</MyText>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}

                <MyButton onClick={() => refetch()}>Применить</MyButton>
            </div>
        </div>
    );
};

export default SideBar;
