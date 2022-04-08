import React from 'react'

export default function ImageLogoSVG({ classLogo = '' }) {
    return (
        <svg
            viewBox="0 0 227 118"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
            className={`logoColor logo ${classLogo}`}
        >
            <path d="M105.24 2.60314C108.458 2.60314 111.033 2.92605 113.178 3.57187C115.324 4.2177 116.933 4.86352 118.22 5.61697C119.615 6.58571 120.688 7.55444 121.546 8.63081C110.711 31.3422 100.09 51.1474 89.577 68.0464C85.0714 75.258 80.4584 82.2544 75.6309 88.8203C70.8034 95.3861 65.9759 101.091 61.1484 105.935C56.3209 110.671 51.7079 114.115 47.2023 116.268C42.6966 118.42 38.5128 118.528 34.6507 116.806C31.7542 115.407 29.9305 113.254 29.1796 110.24C28.4286 107.226 28.6432 103.889 29.6087 100.337C30.5742 96.7854 32.1834 93.341 34.4362 89.8967C36.689 86.4523 39.371 83.6537 42.482 81.501C45.5931 79.3482 48.8114 78.1642 52.3516 77.8413C55.7845 77.5184 59.2174 78.7024 62.6503 81.3933C61.1484 81.3933 59.2174 82.0392 56.9645 83.4384C54.7117 84.8377 52.3516 86.6676 49.9915 88.8203C47.6314 90.973 45.2713 93.4487 43.0184 96.1396C40.7656 98.8305 38.9419 101.306 37.5473 103.782C36.1526 106.257 35.2944 108.41 34.9726 110.348C34.6507 112.285 35.1871 113.684 36.689 114.546C38.4055 115.514 40.6583 115.299 43.1257 113.9C45.7004 112.393 48.4896 110.025 51.4934 106.796C54.4972 103.567 57.7155 99.584 61.0411 94.848C64.3667 90.1119 67.6923 85.053 71.0179 79.5635C74.3436 74.074 77.6692 68.3693 80.8875 62.4493C84.1059 56.5292 87.1096 50.7168 90.0061 45.0121C92.7954 39.3073 95.37 33.9255 97.6229 28.7589C99.8757 23.5923 101.699 19.0716 103.201 15.1967C101.378 17.9952 99.1248 20.9014 96.5501 23.8076C93.9754 26.8214 91.2935 29.8353 88.5042 32.9567C85.715 36.0782 83.0331 39.092 80.3511 41.9982C77.6692 44.9044 75.2018 47.8106 73.0562 50.5016C70.9107 53.1925 69.0869 55.6681 67.6923 57.9285C66.2977 60.1889 65.5468 62.234 65.4395 63.8485C63.0794 59.3278 62.2212 55.1299 62.9721 51.255C63.6158 47.3801 65.2249 43.8281 67.7996 40.599C70.3743 37.2622 73.4853 34.2484 77.3473 31.4498C81.1021 28.6513 84.8568 25.9603 88.6115 23.3771C92.3662 20.7938 95.7991 18.3181 98.9102 15.9501C102.021 13.5821 104.167 11.2141 105.347 8.73844C106.205 4.75588 106.312 2.60314 105.24 2.60314Z" />
            <path d="M135.599 63.8485C136.994 63.7409 138.603 62.7722 140.212 60.7271C141.821 58.7896 143.645 56.2063 145.469 52.9772C147.293 49.8557 149.224 46.3037 151.155 42.3212C153.086 38.3386 155.124 34.356 157.269 30.2658C159.415 26.1756 161.56 22.3007 163.813 18.5334C166.066 14.7661 168.426 11.4294 170.894 8.63081C168.426 6.90862 165.422 6.80098 161.882 8.52317C158.342 10.2454 154.48 13.0439 150.511 17.0265C146.542 21.009 142.465 25.8527 138.388 31.4498C134.312 37.0469 130.45 43.0746 127.017 49.3176C123.584 55.5605 120.58 61.6958 118.113 67.8311C115.646 73.9664 114.036 79.4559 113.285 84.2995C112.534 89.1432 112.749 93.1258 114.144 96.1396C115.431 99.1534 118.113 100.66 122.297 100.66C124.871 100.66 127.661 99.7993 130.664 98.0771C133.668 96.3549 136.565 94.2021 139.461 91.6189C142.358 89.0356 145.04 86.237 147.507 83.1155C149.974 79.9941 151.905 77.0879 153.407 74.2893C154.909 71.5984 155.767 69.2304 156.089 67.1853C156.411 65.2478 155.767 63.9562 154.266 63.6333H167.353C162.741 71.2755 157.806 78.0566 152.656 83.9766C150.404 86.4523 147.936 89.0356 145.362 91.4036C142.787 93.8792 140.105 96.032 137.316 97.8618C134.526 99.7993 131.63 101.306 128.733 102.49C125.73 103.674 122.726 104.212 119.722 104.212C114.895 104.212 111.14 102.921 108.565 100.445C105.991 97.9694 104.381 94.6327 103.738 90.4348C103.094 86.237 103.201 81.501 104.167 76.0115C105.132 70.522 106.634 64.9249 108.78 59.0049C110.925 53.0848 113.607 47.1648 116.718 41.3524C119.829 35.4324 123.262 29.9429 127.017 24.7763C130.772 19.6098 134.634 15.089 138.71 11.1065C142.787 7.12389 146.863 4.21769 150.833 2.28023C154.909 0.342766 158.771 -0.303056 162.526 0.127492C166.281 0.558039 169.606 2.71078 172.717 6.37043C175.185 3.89478 177.652 2.06496 180.227 1.09622C182.802 0.127492 185.376 0.235129 188.058 1.52677C187.093 1.52677 185.591 3.14132 183.66 6.37043C181.729 9.59954 179.476 13.5821 176.901 18.3181C174.219 23.0541 171.323 28.2207 168.104 33.7102C164.886 39.1997 161.56 44.2586 158.02 48.7794C154.48 53.4078 150.833 57.0674 146.971 59.866C143.216 63.2027 139.354 64.3867 135.599 63.8485Z" />
            <path d="M116.933 51.0397C116.075 53.0848 115.324 54.5918 114.573 55.5605C113.822 56.5292 113.071 57.175 112.427 57.498C111.676 57.8209 111.033 57.8209 110.282 57.6056C109.531 57.3903 108.887 57.0674 108.136 56.6369C107.385 56.2063 106.741 55.7758 105.991 55.2376C105.24 54.807 104.489 54.3765 103.738 54.1612C102.987 53.9459 102.236 53.9459 101.378 54.2688C100.519 54.4841 99.6611 55.1299 98.8029 56.2063C99.6611 54.2688 100.627 52.8696 101.592 52.2237C102.558 51.5779 103.63 51.255 104.596 51.255C105.669 51.255 106.634 51.4703 107.707 51.9008C108.78 52.3314 109.853 52.6543 110.925 52.9772C111.998 53.3001 112.964 53.3001 113.929 53.1925C115.109 52.8696 116.075 52.2237 116.933 51.0397Z" />
            <path d="M73.2708 2.06496L70.1597 7.4468H15.448L37.1181 58.1438L28.965 70.7373L0 3.24896L0.536389 2.06496H73.2708Z" />
            <path d="M153.622 108.625L156.733 104.105H211.445L189.667 53.5154L197.928 40.9219L227 108.303L226.464 108.625H153.622V108.625Z" />
        </svg>
    )
}
