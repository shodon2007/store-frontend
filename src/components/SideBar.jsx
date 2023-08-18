import React from 'react'

const SideBar = ({ brands, settings, setSettings, changeSettings }) => {
    return (
        <div className='side-bar'>
            <div className='side-item'>
                <h3>Производитель</h3>
                {<select
                    className='side-input side-select'
                    value={settings.brand}
                    onChange={e => setSettings(prew => ({ ...prew, brand: e.target.value }))}>
                    <option value='all'>все</option>
                    {brands.map((brand, index) => {
                        return <option value={brand} key={index}>{brand}</option>
                    })}
                </select>}
            </div>
            <div className='side-item side-price'>
                <h3>Цена</h3>
                <div className="price-input">
                    <input
                        className='side-input'
                        type='number'
                        value={settings.price.min}
                        onChange={e => setSettings(prew => ({
                            ...prew,
                            price: {
                                ...prew.price,
                                min: e.target.value
                            }
                        }
                        ))}
                    />
                    <input
                        className='side-input'
                        type='number'
                        value={settings.price.max}
                        onChange={e => setSettings(prew => ({
                            ...prew,
                            price: {
                                ...prew.price,
                                max: e.target.value
                            }
                        }
                        ))}
                    />
                </div>
            </div>
            <input
                type='button'
                className='side-input'
                onClick={() => changeSettings()}
                value='Применить'
            />
        </div>
    )
}

export default SideBar