import React from 'react'
import BackgroundShapes from '../Components/BackgroundShapes'
import About from '../Containers/Home/About'
import Init from '../Containers/Home/Init'
import Qualification from '../Containers/Home/Qualification'
import Skills from '../Containers/Home/Skills'
import Services from '../Containers/Home/Services'
import '../Stylesheets/Pages/Home/Home.scss'
import Discount from '../Containers/Home/Discount'
import ContactMe from '../Containers/Home/ContactMe'
import Social from '../Containers/Home/Social'
import RightReserved from '../Containers/Home/RightReserved'
// import SmoothBlob from '../Components/SmoothBlob'

function Home() {
    return (
        <>
            {/* <SmoothBlob /> */}
            <BackgroundShapes />
            <Init />
            <About />
            <Skills />
            <Qualification />
            <Services />
            <Discount />
            <ContactMe />
            <Social />
            <RightReserved />
        </>
    )
}

export default Home
