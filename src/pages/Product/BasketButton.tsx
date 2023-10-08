import { FC } from "react";
import { useCheckBasket } from "../../hooks/useBasket";
import MyButton from "../../components/UI/button/MyButton";
import { useSelector } from "react-redux";
import { addBasket, removeBasket } from "../../API/fetchBasket";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../../store";

const BasketButton: FC = () => {
    const user = useSelector((state: RootState) => state.user);
    const { id: stringId } = useParams();
    if (!stringId) {
        return "Рандомная ошибка, броо";
    }
    const id = +stringId;
    async function removeFromBasket() {
        await removeBasket(user.user, id);
        refetchBasket();
    }

    async function addToBasket() {
        await addBasket(user.user, id);
        refetchBasket();
    }

    function userIsNotAuth() {
        toast.error("Сначала зарегайся брооо");
    }

    async function addBasketClick() {
        if (!user.isAuth) {
            return userIsNotAuth();
        }
        if (addedToBasket) {
            return removeFromBasket();
        }

        addToBasket();
    }
    const { data: addedToBasket, refetch: refetchBasket } = useCheckBasket(id);
    return (
        <MyButton onClick={addBasketClick}>
            {addedToBasket ? "удалить из корзины" : "в корзину"}
        </MyButton>
    );
};

export default BasketButton;
