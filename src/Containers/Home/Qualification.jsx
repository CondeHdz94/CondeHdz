import React from 'react'
import GlassQualification from '../../Components/GlassQualification'
import GlassQualificationWork from '../../Components/GlassQualificationWork'
import '../../Stylesheets/Pages/Home/Containers/Qualification.scss'
import {
    qualificationEducation,
    qualificationWork,
    qualificationExtraCourses,
} from '../../Data/jsonBase'
import SwiperCarousel from '../../Components/SwiperCarousel'
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
                    {qualificationEducation.map((item) => (
                        <GlassQualification
                            key={item.title}
                            year={item.year}
                            title={item.title}
                            info={item.info}
                        />
                    ))}
                </ul>
                {/* <button className="">More information</button> */}
                <p className="bg-none title-swiper">Supplementary training</p>
                <div className="bg-none">
                    <SwiperCarousel
                        infoSwiperSlide={qualificationExtraCourses}
                    />
                </div>
                <span className="material-icons-outlined color--black icon__qualification bg-none">
                    work_outline
                </span>
                <h3 className="color--black bg-none">Experience</h3>
                <ul className="bg-none">
                    {qualificationWork.map((item, index) => (
                        <GlassQualificationWork
                            key={item.title}
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
