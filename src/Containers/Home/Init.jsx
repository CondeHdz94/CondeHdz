import React from 'react'
import ImageLogoSVG from '../../Components/SVG/ImageLogoSVG'
// import logo from '../../Img/Home/Logo--Icon_Black.svg'
import '../../Stylesheets/Pages/Home/Containers/Init.scss'
import { Link } from 'react-scroll'

function Init() {
    return (
        <div className="container container__home " id="Home" name="Home">
            <figure className="container__logo">
                <ImageLogoSVG />
                {/* <img src={logo} alt="Logo" className="logo" /> */}
            </figure>
            <div className="container__info bg-none">
                <h1 className="color--black bg-none">Hi, I'm Juan Camilo</h1>
                <h3 className="color--secondary-gray bg-none">
                    Multimedia Engineer
                </h3>
                <p className="color--secondary-gray bg-none">
                    Experience in user interaction, frontend development,
                    database management, digital art, vectorization, video
                    production and design.
                </p>
                <p className="color--secondary-gray bg-none">
                    "The best way to face challenges is with an open mind and an
                    insatiable curiosity."
                </p>
                <div className="container__button bg-none">
                    <Link
                        to={'Contact'}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <button>Contact me</button>{' '}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Init
