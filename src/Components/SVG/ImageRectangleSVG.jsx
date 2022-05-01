import React from 'react'

function ImageRectangleSVG({ offSetY, valueX = 1 }) {
    return (
        <svg
            viewBox="0 0 1440 1035"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shapesColor "
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
                transform: `translateY(${offSetY * valueX}px)`,
                backgroundSize: 'contain',
            }}
        >
            <rect
                x="578.496"
                y="620.075"
                width="310.689"
                height="310.689"
                transform="rotate(-10.4925 378.496 185.075)"
                stroke=""
                strokeWidth="10"
            />
        </svg>
    )
}

export default ImageRectangleSVG
