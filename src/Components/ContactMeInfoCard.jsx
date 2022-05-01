import React from 'react'

export default function ContactMeInfoCard({ icon, title, text }) {
    return (
        <li className="container__card__contactMe">
            <span className="material-icons-outlined bg-none color--black">
                {icon}
            </span>
            <div className="contactMe__info bg-none ">
                <div className="color--black button-att">{title}</div>
                <p className="color--secondary-dark-gray">{text}</p>
            </div>
        </li>
    )
}
