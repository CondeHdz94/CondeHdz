import React, { useState, useEffect, useRef } from 'react'

function PercentList({ title, percent, setHeightLi }) {
    const [percentCount, setPercentCount] = useState(0)
    const [percentCountNum, setPercentCountNum] = useState(0)

    const parentRef = useRef()
    useEffect(() => {
        setHeightLi(parentRef.current.scrollHeight)
    }, [parentRef, setHeightLi])

    useEffect(() => {
        setInterval(() => setPercentCount(Math.floor(percent) + 1), 300)
    }, [percent])

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentCountNum((counter) =>
                counter <= percent ? counter + 1 : counter
            )
        }, 15)

        return () => {
            clearInterval(interval)
        }
    }, [percent])

    return (
        <li ref={parentRef}>
            <div className="collapsed__card--text">
                <div className="button-att color--black">{title}</div>
                <small data-testid="t-percentList">{`${
                    percentCountNum > 1 ? `${percentCountNum}%` : 'Learning...'
                }`}</small>
            </div>
            <div className="skills__bar">
                <span
                    className="skills__percentage skills__html"
                    style={{
                        transition: 'width 1s ease-in-out',
                        width: `${percentCount}%`,
                    }}
                ></span>
            </div>
        </li>
    )
}

export default PercentList
