import { Link } from "react-router-dom";

import classes from "./Admin.module.scss";
import MyButton from "../../components/UI/button/MyButton";
import MyTitle from "../../components/UI/title/MyTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const adminFunctions = [
    {
        type: "addDevice",
        text: "Добавить товар",
    },
    {
        type: "deleteDevice",
        text: "Удалить товар",
    },
];

function Admin() {
    const user = useSelector((state: RootState) => state.user);
    if (user.user !== "shodon") {
        return <div>У вас нет доступа</div>;
    }
    return (
        <div className={classes.admin}>
            <MyTitle>Админ зона😎😎😎</MyTitle>
            <div className={classes.list}>
                {adminFunctions.map((item) => {
                    return (
                        <Link to={item.type}>
                            <MyButton>{item.text}</MyButton>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Admin;
