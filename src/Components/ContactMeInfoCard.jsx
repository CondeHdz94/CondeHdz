import React from 'react'

export default function ContactMeInfoCard({ icon, title, text, link }) {
    return (
        <li className="container__card__contactMe bg-none">
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color--secondary-dark-gray bg-none"
                    onClick={() => console.log('click')}
                >
                    <span className="material-icons-outlined bg-none color--black">
                        {icon}
                    </span>
                    <div className="contactMe__info bg-none ">
                        <div className="color--black button-att bg-none">
                            {title}
                        </div>
                        <p className="color--secondary-dark-gray bg-none">
                            {text}
                        </p>
                    </div>
                </a>
            ) : (
                <>
                    <span className="material-icons-outlined bg-none color--black">
                        {icon}
                    </span>
                    <div className="contactMe__info bg-none ">
                        <div className="color--black button-att bg-none">
                            {title}
                        </div>
                        <p className="color--secondary-dark-gray bg-none">
                            {text}
                        </p>
                    </div>
                </>
            )}
        </li>
    )
}
