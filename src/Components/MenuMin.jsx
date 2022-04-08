import React, { useState } from 'react'
import '../Stylesheets/Components/MenuMin.scss'
import { menuItems } from '../Data/jsonBase'

function MenuMin({ showMenu }) {
    const [isSelected, setIsSelected] = useState(null)

    const toggleMenu = (i) => {
        if (isSelected === i) {
            return setIsSelected(null)
        }
        setIsSelected(i)
    }
    return (
        showMenu && (
            <div className="menu__container">
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`menu__list ${
                                isSelected === index && 'selected'
                            }
                                `}
                            onClick={() => toggleMenu(index)}
                        >
                            <span className="material-icons-outlined">
                                {item.icon}
                            </span>
                            <div className="button-att">{item.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}

export default MenuMin
