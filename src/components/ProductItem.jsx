import React, { useEffect, useState } from 'react'
import { useLocation, useMatches, useParams } from 'react-router-dom'
import { getProduct } from '../API/storeAPI';

const ProductItem = () => {
    const location = useLocation();
    const { id } = useParams();
    const [attributes, setAttributes] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const data = await getProduct(id);
        setAttributes(data);
    }
    return (
        <div>
            {attributes.map((attribute) => {
                console.log(attribute)
                return <div key={attribute.title}>
                    <span>{attribute.title_ru}</span>.{attribute.description}{attribute.description_type}
                </div>
            })}
        </div>
    )
}

export default ProductItem