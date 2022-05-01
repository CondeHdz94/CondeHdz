import React, { useState } from 'react'
import '../Stylesheets/Components/MenuMin.scss'
import { menuItems } from '../Data/jsonBase'
import { Link } from 'react-scroll'

function MenuMin({ showMenu, setShowMenu }) {
    const [isSelected, setIsSelected] = useState(null)

    const toggleMenu = (i) => {
        if (isSelected === i) {
            return setIsSelected(null)
        }
        setIsSelected(i)
    }

    return (
        <>
            <div className={`bg__menuMin ${showMenu && 'showMenuBg'}`}></div>
            <div
                className={`menu__container ${showMenu && 'showMenu'} `}
                // style={{ bottom: `${showMenu ? 'showMenu' : '0px'}` }}
            >
                <ul>
                    {menuItems.map((item, index) => (
                        <li className={` menu__list `} key={index}>
                            {' '}
                            <Link
                                to={item.menuId}
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                activeClass=" selected"
                                onClick={() => {
                                    toggleMenu(index)
                                    //window.location.replace(`#${item.menuId}`)
                                    setShowMenu(false)
                                }}
                            >
                                <span className="material-icons-outlined">
                                    {item.icon}
                                </span>
                                <div className="button-att">{item.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MenuMin
