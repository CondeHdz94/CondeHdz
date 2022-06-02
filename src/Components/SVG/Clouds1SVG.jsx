import React from 'react'

function Clouds1SVG({ height, top, left, right, offSetY, valueX = 1 }) {
    return (
        <svg
            // viewBox="0 0 1440 301"
            viewBox="0 0 884 363"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cloudBackColor "
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
            <path
                d="M52.5964 69.7386C43.4825 69.7386 35.0872 64.0661 32.4778 56.3514C28.9987 58.1288 25.0279 59.0742 21.0949 59.0742C17.0863 59.0742 13.229 58.091 9.97675 56.2001C2.489 51.8512 -1.55742 42.5861 0.560329 34.6445C2.45118 27.4971 9.44732 22.1271 16.7838 22.1271C17.4267 22.1271 18.0696 22.1649 18.7125 22.2405C18.7125 22.0136 18.7124 21.7489 18.7503 21.522C18.4855 20.3875 18.3721 19.2908 18.4099 18.1563C18.599 8.02138 29.3012 0.079834 42.7262 0.079834C42.9531 0.079834 43.1422 0.079834 43.3691 0.079834C50.8947 0.231102 57.853 2.9161 62.4288 7.34068C64.4331 3.71025 68.593 1.59251 73.6983 1.59251C76.7614 1.59251 79.9002 2.34885 82.8499 3.82371C89.5435 7.1516 93.7412 13.3914 93.2118 19.1017C95.2161 19.5177 97.1447 20.2362 98.9221 21.1439C100.17 21.5598 101.267 22.2784 102.288 23.2994C106.939 26.9677 109.7 32.2998 109.851 37.9724C110.116 48.9771 100.662 58.2044 88.7116 58.507C88.5225 58.507 88.2956 58.507 88.1065 58.507C83.7954 58.507 79.7112 57.3725 76.1564 55.1791C71.0889 63.2341 63.2986 68.5663 55.1302 69.5495C54.2604 69.7008 53.4284 69.7386 52.5964 69.7386Z"
                fill=""
            />
            <path
                d="M821.334 362.13C811.388 362.13 802.275 355.965 799.4 347.532C795.619 349.461 791.27 350.52 786.996 350.52C782.61 350.52 778.45 349.423 774.895 347.381C766.727 342.654 762.302 332.557 764.609 323.897C766.689 316.106 774.29 310.245 782.269 310.245C782.988 310.245 783.669 310.283 784.387 310.396C784.387 310.131 784.425 309.867 784.425 309.602C784.16 308.392 784.009 307.144 784.047 305.934C784.236 294.891 795.883 286.269 810.519 286.269C810.746 286.269 810.972 286.269 811.199 286.269C819.368 286.42 826.969 289.332 831.961 294.173C834.116 290.24 838.692 287.895 844.213 287.895C847.541 287.895 850.983 288.727 854.197 290.315C861.496 293.946 866.072 300.753 865.504 306.955C867.698 307.408 869.778 308.165 871.706 309.186C873.068 309.64 874.278 310.434 875.375 311.568C880.442 315.577 883.43 321.401 883.581 327.565C883.883 339.553 873.559 349.574 860.55 349.915C860.323 349.915 860.097 349.915 859.908 349.915C855.218 349.915 850.756 348.667 846.898 346.284C841.377 355.058 832.906 360.844 823.981 361.94C823.149 362.054 822.242 362.13 821.334 362.13Z"
                fill=""
            />
        </svg>
    )
}

export default Clouds1SVG