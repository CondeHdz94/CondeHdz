import React from 'react'
import About from '../Containers/Home/About'
import Init from '../Containers/Home/Init'
import Skills from '../Containers/Home/Skills'
import '../Stylesheets/Pages/Home/Home.scss'

function Home() {
    return (
        <>
            <Init />
            <About />
            <Skills />
        </>
    )
}

export default Home
