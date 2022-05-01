import React, { useState, useEffect } from 'react'

function GlassQualification({ index, title, info }) {
    const [itercalated, setItercalated] = useState(true)
    useEffect(() => {
        if (index % 2 === 0) {
            setItercalated(false)
        } else {
            setItercalated(true)
        }
    }, [index])

    return (
        <li
            className={` container__glass work ${
                itercalated ? 'glass__left' : 'glass__right'
            }`}
        >
            <h1 className="color--black bg-none">{title}</h1>
            <p className="color--secondary-gray bg-none">{info}</p>
        </li>
    )
}

export default GlassQualification
