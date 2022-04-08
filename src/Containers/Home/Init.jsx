import React from 'react'
import ImageLogoSVG from '../../Components/ImageLogoSVG'
// import logo from '../../Img/Home/Logo--Icon_Black.svg'
import '../../Stylesheets/Pages/Home/Containers/Init.scss'

function Init() {
    return (
        <div className="container container__home ">
            <figure className="container__logo">
                <ImageLogoSVG />
                {/* <img src={logo} alt="Logo" className="logo" /> */}
            </figure>
            <div className="container__info">
                <h1 className="color--black">Hi, I'm Juan Camilo</h1>
                <h3 className="color--secondary-gray">Multimedia Engineer</h3>
                <p className="color--secondary-gray">
                    Experience in user interaction, frontend development,
                    database management, digital art, vectorization, video
                    production and design.
                </p>
                <div className="container__button">
                    <button>Contact me</button>
                </div>
            </div>
        </div>
    )
}

export default Init
