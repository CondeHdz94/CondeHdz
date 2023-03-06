import React from 'react'
import InfoData from '../../Components/InfoData'
import '../../Stylesheets/Pages/Home/Containers/About.scss'
import { dataInfo } from '../../Data/jsonBase'

function About() {
    return (
        <div className="container container__about bg-none" id="About">
            <div className="container__info bg-none">
                <h2 className="color--black title align-self--center bg-none">
                    About Me
                </h2>
                <p className="color--secondary-gray align-self--center bg-none">
                    My Education
                </p>
                <p className="color--secondary-gray align-self--center bg-none">
                    Multimedia Engineer with an emphasis in web, interested in
                    topics related to user interaction, UX, usability, HCI,
                    along with the area of web layout. Outstanding skills in the
                    design area, with 4 years of professional experience in web
                    programming (JavaScript, TypeScript, React, HTML, CSS, SASS
                    and Tailwind), knowledge in testing frameworks (jest and
                    testing library) and basic knowledge in backend (SQL
                    databases, PHP and phyton). I also have experience in the
                    area of digital graphic design, character creation, video
                    editing, post production, Management and knowledge of
                    programs such as Figma and the Adobe suite (Photoshop,
                    Illustrator, Premiere Pro, Flash Player, After Effects,
                    Audition). Ability to work in a team, innovative, curious,
                    creative with a willingness to continuously learn.
                </p>
                <div className="container__info--data bg-none">
                    {dataInfo.map((item) => (
                        <InfoData
                            key={item.info}
                            old={item.old}
                            info={item.info}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
