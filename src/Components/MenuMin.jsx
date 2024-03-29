import React, { useState } from 'react'
import '../Stylesheets/Components/MenuMin.scss'
import { menuItems } from '../Data/jsonBase'
import { Link } from 'react-scroll'

function MenuMin({ showMenu, setShowMenu, setColorTheme }) {
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
            <div className={`theme__colors ${showMenu && 'showMenuColors'}`}>
                <ul>
                    <li>
                        <span
                            data-testid="t-color-blue"
                            className="material-icons-outlined color--blue"
                            onClick={() => setColorTheme('--blue')}
                        >
                            water_drop
                        </span>
                    </li>
                    <li>
                        <span
                            data-testid="t-color-red"
                            className="material-icons-outlined color--red"
                            onClick={() => setColorTheme('--red')}
                        >
                            water_drop
                        </span>
                    </li>
                    <li>
                        <span
                            data-testid="t-color-green"
                            className="material-icons-outlined color--green"
                            onClick={() => setColorTheme('--green')}
                        >
                            water_drop
                        </span>
                    </li>
                    <li>
                        <span
                            data-testid="t-color-purple"
                            className="material-icons-outlined color--purple"
                            onClick={() => setColorTheme('--purple')}
                        >
                            water_drop
                        </span>
                    </li>
                    <li>
                        <span
                            data-testid="t-color-gray"
                            className="material-icons-outlined color--gray"
                            onClick={() => setColorTheme('')}
                        >
                            water_drop
                        </span>
                    </li>
                </ul>
            </div>
            <div
                className={`menu__container ${showMenu && 'showMenu'} `}
                // style={{ bottom: `${showMenu ? 'showMenu' : '0px'}` }}
            >
                <ul>
                    {menuItems.map((item, index) => (
                        <li className={` menu__list `} key={`${item.menuId}`}>
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
