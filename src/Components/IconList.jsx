import React from 'react'

function IconList({ indexIn, title, info, icon, subItems }) {
    return (
        <li key={indexIn} className="skills__list__text">
            <div className="collapsed__firstInfo bg-none">
                <div className="collapsed__Title-data bg-none">
                    <div className="button-att bg-none">{title}</div>
                    <small className="bg-none">{info}</small>
                </div>
            </div>
            <ul className="bg-none">
                {subItems.map((item) => (
                    <li
                        key={`subitem_${item.id}`}
                        className="skills__list--text bg-none"
                    >
                        {/* <img src={item.icon} alt={`subitem_image${item.id}`} /> */}
                        <span className="skills_text__box">{item.name}</span>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default IconList
