import React, { useEffect, useState } from 'react'
import '../Stylesheets/Components/Navigation.scss'
// import logo from '../Img/Home/Logo--Icon_Black.svg'
import ImageLogoSVG from './SVG/ImageLogoSVG'
import MenuMin from './MenuMin'
import { menuItems } from '../Data/jsonBase'
import { Link } from 'react-scroll'

function Navigation({ mode, setMode, addColor, setAddColor }) {
    const [isSelected, setIsSelected] = useState(null)
    const [showMenu, setShowMenu] = useState(false)
    const [colorTheme, setColorTheme] = useState(addColor)

    const handleClickMode = () => {
        if (mode !== 'white') {
            setMode('white')
        } else {
            setMode('dark')
        }
    }

    useEffect(() => {
        localStorage.setItem('colorMode', mode)
        localStorage.setItem('colorAdded', colorTheme)
        setAddColor(colorTheme)
    }, [mode, colorTheme, setAddColor])

    const toggleMenu = (i) => {
        if (isSelected === i) {
            return setIsSelected(null)
        }
        setIsSelected(i)
    }

    return (
        <>
            <MenuMin
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                setColorTheme={setColorTheme}
            />
            <div className="nav__container ">
                <nav className="bg-none">
                    <div className="nav__container__nav__logo bg-none">
                        <Link
                            to={'Home'}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            activeClass=" selected"
                        >
                            <ImageLogoSVG classLogo={'nav__logo'} />
                        </Link>
                    </div>
                    {/* <img src={logo} alt="Logo" className="nav__logo" /> */}
                    <div className="d-flex nav__menu__container">
                        <ul
                            className="nav__menu__list bg-none"
                            style={{
                                gridTemplateColumns: `repeat(${menuItems.length}, 1fr)`,
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <li
                                    className={`nav__menu bg-none list-menu-${index}`}
                                    data-testid={`list-menu-${index}`}
                                    key={index}
                                    alt={`list-menu-${index}`}
                                >
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
                                        <div className="button-att bg-none">
                                            {item.name}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <span
                            data-testid="t-toggle-dark-mode"
                            className="material-icons-outlined m-l color--black"
                            onClick={handleClickMode}
                        >
                            {mode === 'white'
                                ? 'dark_mode'
                                : mode === 'dark'
                                ? 'light_mode'
                                : ''}
                        </span>

                        <span
                            data-testid="t-toggle-menu"
                            className="material-icons-outlined m-l color--black invert-h nav__movile"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            sort
                        </span>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
