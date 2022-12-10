import React from 'react'

function LogoSistelSVG({ height, top, left, right, offSetY, valueX = 1 }) {
    return (
        <svg
            viewBox="0 0 181 174"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cloudFrontColor "
            style={{
                position: 'absolute',
                height: height,
                top: top,
                left: left,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'transparent',
                backgroundSize: 'contain',
            }}
        >
            <path d="M107.37 173.028C99.8792 172.999 92.4769 172.35 85.1042 171.052C74.8891 169.282 65.0293 166.332 55.6433 161.967C50.9354 159.784 46.1684 157.631 42.3192 153.973C38.7069 150.551 36.575 146.422 35.9829 141.555C35.065 134.18 37.5817 127.691 41.4013 121.556C45.2209 115.45 49.7807 109.963 55.0215 105.067C57.5678 102.707 60.1734 100.377 62.9863 98.3121C65.2662 96.6603 66.9243 97.1322 68.2567 99.551C71.4545 105.391 75.5405 110.583 80.1299 115.361C83.535 118.931 87.3249 122.057 91.3518 124.859C95.8227 127.986 100.649 130.493 105.594 132.765C112.404 135.891 119.51 138.222 126.853 139.578C134.611 141.024 142.457 141.348 150.066 139.018C162.177 135.301 170.053 127.455 172.421 114.771C173.25 110.435 173.31 106.011 172.865 101.586C172.836 101.38 172.806 101.203 172.836 100.996C172.954 100.318 172.392 99.3445 173.369 99.079C174.435 98.7841 174.672 99.7575 175.056 100.524C177.929 106.483 179.972 112.766 180.653 119.314C181.363 126.187 181.097 133.03 178.225 139.519C175.915 144.74 172.629 149.224 168.424 153.147C161.999 159.135 154.508 163.235 146.336 166.332C141.302 168.25 136.18 169.695 130.939 170.757C125.935 171.76 120.902 172.497 115.779 172.704C112.966 172.881 110.183 173.028 107.37 173.028Z" />
            <path d="M163.479 102.412C163.716 106.158 163.391 109.875 161.91 113.474C159.038 120.435 153.649 124.417 146.543 126.246C138.341 128.399 130.11 127.396 121.967 125.862C115.72 124.683 109.65 122.795 103.847 120.228C101.715 119.285 101.093 117.426 102.337 115.42C105.831 109.787 108.407 103.769 110.213 97.4568C112.996 87.8407 113.884 78.0477 112.907 68.0777C112.226 61.2934 111.16 54.5976 109.147 48.0493C106.6 39.7606 102.929 32.0619 96.7998 25.7495C89.7824 18.5523 81.1958 15.1011 71.1287 15.9565C65.8583 16.399 61.0913 18.6997 56.5315 21.266C54.8142 22.2394 53.1857 23.3308 51.5572 24.4222C50.8762 24.8941 50.1952 25.3661 49.4549 24.6876C48.6851 24.0092 49.4253 23.3898 49.7806 22.8883C56.5907 13.2133 64.8516 5.2196 76.4584 1.59147C84.3344 -0.856783 92.2104 -0.355333 100.086 2.2404C105.209 3.92173 109.976 6.252 114.506 9.11321C118.296 11.5025 121.819 14.2457 125.136 17.2544C133.515 24.8351 140.384 33.5957 146.188 43.2413C151.576 52.2378 155.751 61.7654 158.771 71.8239C160.637 78.0182 161.999 84.3306 162.828 90.7609C163.242 94.6251 163.746 98.4892 163.479 102.412Z" />
            <path d="M56.5019 31.4129C59.6404 29.3187 63.0455 27.7553 66.8947 27.2244C74.3857 26.2215 80.5444 28.8762 85.6964 34.0677C91.6774 40.0556 94.9344 47.6363 97.6881 55.453C99.7903 61.4409 101.182 67.6058 101.893 73.9181C102.159 76.2189 100.827 77.6938 98.4875 77.6348C91.8551 77.4578 85.3411 78.2542 78.9159 79.847C69.1746 82.2658 60.2326 86.3954 52.0309 92.2358C46.4644 96.2179 41.1644 100.495 36.5158 105.509C30.594 111.881 25.7381 118.901 23.3398 127.337C20.5861 136.983 21.8889 146.127 27.6923 154.386C30.7124 158.693 35.0946 161.672 39.6247 164.297C41.3125 165.3 43.089 166.126 44.8655 167.011C45.6058 167.365 46.3756 167.689 46.1683 168.692C45.9611 169.695 45.0728 169.37 44.451 169.311C32.637 168.279 21.5632 165.182 12.5917 156.982C6.49224 151.407 3.02798 144.387 1.31066 136.304C0.215121 131.024 -0.169796 125.774 0.0670761 120.435C0.215121 115.951 0.86652 111.527 1.7844 107.161C4.18273 96.1589 8.328 85.8054 13.8057 75.9829C18.928 66.8094 25.1163 58.4617 32.3113 50.822C36.7527 46.1025 41.5493 41.7664 46.7309 37.8433C49.8399 35.513 52.9488 33.1533 56.5019 31.4129Z" />
        </svg>
    )
}

export default LogoSistelSVG