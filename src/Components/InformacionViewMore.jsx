import React from 'react'

function InformacionViewMore({
    icon,
    title,
    setModalShow,
    info,
    setInfoModalList,
    setModalTitle,
}) {
    const handleClick = () => {
        setModalShow(true)
        setInfoModalList(info)
        setModalTitle(title)
    }

    return (
        <li
            data-testid="t-open-information"
            className="container__neumorphism"
            onClick={handleClick}
        >
            <div className="container__service__tag bg-none">
                <span className="material-icons-outlined icon color--black bg-none">
                    {icon}
                </span>
                <h3 className="color--secondary-dark-gray bg-none ">{title}</h3>
            </div>
            <small className="color--black bg-none ">View more...</small>
        </li>
    )
}

export default InformacionViewMore
