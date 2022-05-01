import React, { useState } from 'react'
import '../Stylesheets/Components/Navigation.scss'
// import logo from '../Img/Home/Logo--Icon_Black.svg'
import ImageLogoSVG from './SVG/ImageLogoSVG'
import MenuMin from './MenuMin'

function Navigation({ mode, setMode }) {
    const [showMenu, setShowMenu] = useState(false)

    const handleClickMode = () => {
        if (mode !== 'white') {
            setMode('white')
        } else {
            setMode('dark')
        }
    }

    return (
        <>
            <MenuMin showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className="nav__container ">
                <nav>
                    <ImageLogoSVG classLogo={'nav__logo'} />

                    {/* <img src={logo} alt="Logo" className="nav__logo" /> */}
                    <div className="d-flex">
                        <span
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
                            className="material-icons-outlined m-l color--black invert-h"
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
