import React, { useEffect, useState } from 'react'
import { getCatalogs } from '../API/storeAPI';
import CatalogItem from './CatalogItem';
import Breadcrumbs from './Breadcrumbs';

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
            <Breadcrumbs />
            <div className="catalog-list">
                {catalogs.map(catalog => {
                    return <CatalogItem key={catalog.name} catalog={catalog} />
                })}
            </div>
        </div>
    )
}

export default Catalog