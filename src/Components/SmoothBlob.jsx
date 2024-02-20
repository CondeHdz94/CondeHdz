import React from 'react'

function SmoothBlob() {
    return (
        <div
            className="smooth_blob"
            style={{
                justifyContent: 'center',
                display: 'flex',
            }}
        >
            <svg
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'fixed',
                    opacity: '.2',
                    filter: 'blur(16px)',
                    top: '0',
                    maxHeight: ' 709px',
                }}
            >
                <defs>
                    <radialGradient id="b" r="100%" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#FFE53B" />
                        <stop offset="100%" stopColor="#FF2525" />
                    </radialGradient>
                    <clipPath id="a">
                        <path
                            fill="currentColor"
                            d="M902.5 631q-90.5 131-207 225T458 866q-121-84-255.5-146.5t-144-223q-9.5-160.5 139-212t254-80q105.5-28.5 233 3t218 162Q993 500 902.5 631Z"
                        />
                    </clipPath>
                </defs>
                <g clipPath="url(#a)">
                    <path fill="url(#b)">
                        <animate
                            attributeName="d"
                            dur={'10s'}
                            repeatCount={'indefinite'}
                            values="M902.5 631q-90.5 131-207 225T458 866q-121-84-255.5-146.5t-144-223q-9.5-160.5 139-212t254-80q105.5-28.5 233 3t218 162Q993 500 902.5 631Z;
                            M873.5 651Q859 802 718 869t-295.5 49.5Q268 901 192.5 770T75 484.5Q33 330 143 201t264.5-90Q562 150 707 177.5t163 175Q888 500 873.5 651Z;
                            M869 620.5Q787 741 674 794t-267 93.5Q253 928 214.5 773T141 487.5Q106 357 222.5 289T456 155q117-66 242.5 3.5t189 205.5Q951 500 869 620.5Z;
                            M902.5 631q-90.5 131-207 225T458 866q-121-84-255.5-146.5t-144-223q-9.5-160.5 139-212t254-80q105.5-28.5 233 3t218 162Q993 500 902.5 631Z;
                            "
                        ></animate>
                    </path>
                    {/* <path
                        fill="url(#b)"
                        d="M902.5 631q-90.5 131-207 225T458 866q-121-84-255.5-146.5t-144-223q-9.5-160.5 139-212t254-80q105.5-28.5 233 3t218 162Q993 500 902.5 631Z"
                    /> */}
                </g>
            </svg>
        </div>
    )
}

export default SmoothBlob
