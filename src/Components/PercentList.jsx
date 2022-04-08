import React, { useState, useEffect } from 'react'

function PercentList({ title, percent, stateSelect }) {
    const [percentCount, setPercentCount] = useState(0)
    const [oldStateId, setOldStateId] = useState(null)

    // useEffect(() => {
    //     setInterval(() => setPercentCount(Math.floor(percent) + 1), 2000)
    // }, [percent])

    // useEffect(() => {
    //     setOldStateId(stateSelect)
    // }, [stateSelect])

    // useEffect(() => {
    //     console.log(stateSelect, oldStateId)
    //     oldStateId !== stateSelect && setPercentCount(0)
    // }, [oldStateId, stateSelect, setPercentCount])

    return (
        <li>
            <div className="collapsed__card--text">
                <div className="button-att color--black">{title}</div>
                <small>{`${percent}%`}</small>
            </div>
            <div className="skills__bar">
                <span
                    className="skills__percentage skills__html"
                    style={{
                        transition: 'width 1s ease-in-out',
                        width: `${percent}%`,
                    }}
                ></span>
            </div>
        </li>
    )
}

export default PercentList
