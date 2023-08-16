import React, { useEffect, useState } from 'react'
import { getCatalogs } from '../API/storeAPI';
import CatalogItem from './CatalogItem';

const Catalog = () => {
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const data = await getCatalogs();
            setCatalogs(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className='catalog'>
            {catalogs.map(catalog => {
                return <CatalogItem key={catalog.name} catalog={catalog} />
            })}
        </div>
    )
}

export default Catalog