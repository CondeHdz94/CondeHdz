import React from 'react'
import GlassQualification from '../../Components/GlassQualification'
import GlassQualificationWork from '../../Components/GlassQualificationWork'
import '../../Stylesheets/Pages/Home/Containers/Qualification.scss'
import { qualificationEducation, qualificationWork } from '../../Data/jsonBase'
//import LogoSistelSVG from '../../Components/SVG/LogoSistelSVG'

function Qualification() {
    return (
        <div
            className="container container__qualification bg-none"
            id="Qualifications"
        >
            <div className="container__info bg-none">
                <h2 className="color--black title align-self--center bg-none">
                    Qualification
                </h2>
                <p className="color--secondary-gray align-self--center bg-none">
                    My personal journey
                </p>
                <span className="material-icons-outlined color--black icon__qualification bg-none">
                    school
                </span>
                <h3 className="color--black bg-none">Education</h3>
                <ul className="bg-none">
                    {qualificationEducation.map((item, index) => (
                        <GlassQualification
                            key={index}
                            year={item.year}
                            title={item.title}
                            info={item.info}
                        />
                    ))}
                </ul>
                <button className="">More information</button>

                <span className="material-icons-outlined color--black icon__qualification bg-none">
                    work_outline
                </span>
                <h3 className="color--black bg-none">Work</h3>
                <ul className="bg-none">
                    {qualificationWork.map((item, index) => (
                        <GlassQualificationWork
                            key={index}
                            index={index}
                            title={item.title}
                            info={item.info}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Qualification
