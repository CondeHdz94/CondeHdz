import React from 'react'

function ImageEllipseSVG({ height, top, left, right, offSetY, valueX = 1 }) {
    return (
        <svg
            viewBox="0 0 1300 916"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shapesColor "
            style={{
                position: 'absolute',
                height: height,
                top: top,
                left: left,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
                transform: `translateY(${offSetY * valueX}px)`,
                backgroundSize: 'contain',
            }}
        >
            <circle
                cx="134.53"
                cy="176.53"
                r="298.53"
                stroke=""
                strokeWidth="10"
            />
            <circle
                cx="1233.81"
                cy="849.806"
                r="62.8056"
                stroke=""
                strokeWidth="10"
            />
        </svg>
    )
}

export default ImageEllipseSVG
