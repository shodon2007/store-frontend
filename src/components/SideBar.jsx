import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBrand } from '../API/storeAPI';

const SideBar = ({ changeBrand }) => {
    const { type } = useParams();
    const [brands, setBrands] = useState([]);
    const [brandValue, setBrandValue] = useState('all');

    useEffect(() => {
        async function fetchData() {
            const data = await getBrand(type);
            setBrands(data);
        }
        fetchData();
    })



    useEffect(() => {
        changeBrand(brandValue)
    }, [brandValue]);

    return (
        <div>
            <h3>Производитель</h3>
            <select value={brandValue} onChange={e => setBrandValue(e.target.value)}>
                <option value='all'>все</option>
                {brands.map(brand => {
                    return <option value={brand.name} key={brand.id}>{brand.name}</option>
                })}
            </select>
        </div>
    )
}

export default SideBar