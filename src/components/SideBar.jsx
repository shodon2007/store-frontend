import React from 'react'

const SideBar = ({ brands, brand, setBrand }) => {
    return (
        <div>
            <h3>Производитель</h3>
            {<select value={brand} onChange={e => setBrand(e.target.value)}>
                <option value='all'>все</option>
                {brands.map((brand, index) => {
                    return <option value={brand} key={index}>{brand}</option>
                })}
            </select>}
        </div>
    )
}

export default SideBar