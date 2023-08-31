import React, { useEffect, useState } from 'react'
import { getProduct } from '../API/fetchProducts';
import { useParams } from 'react-router-dom';
import MyTitle from '../components/UI/title/MyTitle';
// import { checkBasket } from '../API/fetchBasket';
import { useSelector } from 'react-redux';

const Product = () => {
    const user = useSelector(state => state.user);
    const { type, id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        attributes: [
        ],
        price: 0,
    });
    useEffect(() => {
        async function getData() {
            const data = await getProduct(type, id);
            setProduct(data);
            console.log(data);
            if (user.isAuth) {
                // const basketData = await checkBasket(token, id);
            }
        }
        getData();
    }, []);

    return (
        <div className='product'>
            <MyTitle className='product__title'>{product.name}</MyTitle>
            <div className="product__item">
                <img src={`http://localhost:3000/${product.img}`} alt="phone" />
                <div className="product__info">
                    <div className="product__top">
                        <div className="product__attributes">
                            <h3>Характеристики</h3>
                            <div className="attributes__items">
                                {product.attributes.map(attribute => {
                                    return <div className='attribute__item'>
                                        <b>{attribute.title}</b>{` : ${attribute.description}`}
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="product__bottom">
                        <div className="product__price">{product.price} рублей</div>
                        <button className="product__basket">в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product