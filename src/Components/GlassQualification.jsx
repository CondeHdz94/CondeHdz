import React from 'react'

function GlassQualification({ year, title, info }) {
    return (
        <li className="container__glass school">
            <h1 className="bg-none color--black">{year}</h1>
            <div className="button-att bg-none color--secondary-gray">
                {title}
            </div>
            <p className="bg-none color--secondary-gray">{info}</p>
        </li>
    )
}

export default GlassQualification
