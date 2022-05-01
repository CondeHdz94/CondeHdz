import React from 'react'

export default function ImagePolygonSVG({ offSetY, valueX = 1 }) {
    return (
        <svg
            viewBox="0 0 1337 1349"
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
            <path
                d="M1170.79 91.1415L1276.76 49.3531L1259.97 162.022L1170.79 91.1415Z"
                stroke=""
                strokeWidth="10"
            />
            <path
                d="M158.175 1300L7.25914 1117.77L240.527 1078.19L158.175 1300Z"
                stroke=""
                strokeWidth="10"
            />
        </svg>
    )
}
