import React, { useRef, useState } from 'react'
import PercentList from './PercentList'
import '../Stylesheets/Components/CollapsedList.scss'

function CollapsedList({
    icon,
    title,
    info,
    iconArrow = 'expand_more',
    subItems,
    indexIn,
    isSelected,
    setIsSelected,
}) {
    const [heightLi, setHeightLi] = useState(0)
    const parentRef = useRef()
    const toggle = (i) => {
        if (isSelected === i) {
            return setIsSelected(null)
        }
        setIsSelected(i)
    }

    return (
        <li className="m-b-li">
            <div
                data-testid="t-open-list"
                className={
                    isSelected === indexIn
                        ? 'collapsed__card list--selected'
                        : 'collapsed__card list'
                }
                onClick={() => toggle(indexIn)}
            >
                <div className="collapsed__firstInfo bg-none">
                    <span className="material-icons-outlined icon__collapsed bg-none">
                        {icon}
                    </span>
                    <div className="collapsed__Title-data bg-none">
                        <div className="button-att bg-none">{title}</div>
                        <small className="bg-none">{info}</small>
                    </div>
                </div>
                <span className="material-icons-outlined bg-none collapsed__arrow">
                    {iconArrow}
                </span>
            </div>
            <ul
                className={
                    isSelected === indexIn
                        ? 'collapsed__subItems show'
                        : 'collapsed__subItems'
                }
                ref={parentRef}
                style={
                    isSelected === indexIn
                        ? {
                              height:
                                  (heightLi + 16) *
                                      Object.keys(subItems).length +
                                  'px',
                          }
                        : { height: '0px' }
                }
            >
                {subItems.map((item, index) => (
                    <PercentList
                        key={index}
                        title={item.title}
                        percent={item.percent}
                        setHeightLi={setHeightLi}
                    />
                ))}
            </ul>
        </li>
    )
}

export default CollapsedList
