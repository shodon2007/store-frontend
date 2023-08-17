import React from 'react'

const SideBar = ({ brands, brand, setBrand, price, setPrice }) => {
    console.log(price)
    return (
        <div>
            <div className='side-item'>
                <h3>Производитель</h3>
                {<select value={brand} onChange={e => setBrand(e.target.value)}>
                    <option value='all'>все</option>
                    {brands.map((brand, index) => {
                        return <option value={brand} key={index}>{brand}</option>
                    })}
                </select>}
            </div>
            <div className='side-item price'>
                <h3>Цена</h3>
                <div className="price__input">
                    <div className="price__block">
                        от <input
                            type='number'
                            value={price.min}
                            onChange={e => setPrice({ ...price, min: +e.target.value })}
                        />
                    </div>
                    <div className="price__block">
                        до <input
                            type='number'
                            value={price.max}
                            onChange={e => setPrice({ ...price, max: +e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar