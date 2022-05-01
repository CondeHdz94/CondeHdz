import React from 'react'
import '../../Stylesheets/Pages/Home/Containers/Services.scss'
import { services } from '../../Data/jsonBase'
import InformacionViewMore from '../../Components/InformacionViewMore'

export default function Services() {
    return (
        <div className="container container__services bg-none " id="Services">
            <div className="container__info bg-none">
                <h2 className="color--black title align-self--center bg-none">
                    Services
                </h2>
                <p className="color--secondary-gray align-self--center bg-none">
                    My services
                </p>
                <ul className="bg-none ">
                    {services.map((item, index) => (
                        <InformacionViewMore
                            key={index}
                            icon={item.icon}
                            title={item.title}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
