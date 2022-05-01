import React from 'react'
import '../../Stylesheets/Pages/Home/Containers/Social.scss'
import { social } from '../../Data/jsonBase'

export default function Social() {
    return (
        <div className="bg-black container__full container_full__social ">
            <div className="bg__mountain"></div>
            <div className="bg__moon"></div>
            <div className="container container__social bg-none">
                <div className="container__info bg-none">
                    <h2 className="color--white bg-none">Juan Camilo</h2>
                    <div className="button-att color--secondary-light-gray bg-none">
                        Multimedia Engineer
                    </div>
                    <ul className="bg-none  container__glass">
                        {social.map((item, index) => (
                            <li
                                key={index}
                                className={`icon_${item.icon} icon__att bg-none`}
                            ></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
