import React from 'react'
import InfoData from '../../Components/InfoData'
import '../../Stylesheets/Pages/Home/Containers/About.scss'
import {dataInfo} from '../../Data/jsonBase'

function About() {
    

    return (
        <div className="container container__home ">
            <div className="container__info ">
                <h2 className="color--black title align-self--center">
                    About Me
                </h2>
                <p className="color--secondary-gray align-self--center">
                    My Education
                </p>
                <p className="color--secondary-gray align-self--center">
                    Experience in user interaction, frontend development,
                    database management, digital art, vectorization, video
                    production and design.
                </p>
                <div className="container__info--data">
                    {dataInfo.map((item, index) => (
                        <InfoData key={index} old={item.old} info={item.info} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
