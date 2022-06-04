import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export default function ScrollUp() {
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Link to={'Home'} spy={true} smooth={true} offset={50} duration={500}>
            <div
                className={`scroll__up ${
                    scrollPosition >= 500 ? 'showScroll__up' : 'hideScroll__up'
                }`}
            >
                <span className="material-icons-outlined bg-none">
                    expand_less
                </span>
            </div>
        </Link>
    )
}
