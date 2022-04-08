import React, { useState } from 'react'
import CollapsedList from '../../Components/CollapsedList'
import '../../Stylesheets/Pages/Home/Containers/Skills.scss'
import { dataSkills } from '../../Data/jsonBase'

function Skills() {
    const [isSelected, setIsSelected] = useState(null)
    const [indexSelected, setIndexSelected] = useState(null)

    return (
        <div className="container container__home ">
            <div className="container__info ">
                <h2 className="color--black title align-self--center">
                    Skills
                </h2>
                <p className="color--secondary-gray align-self--center">
                    My technical level
                </p>

                <ul>
                    {dataSkills.map((item, index) => (
                        <CollapsedList
                            key={index}
                            indexIn={index}
                            OnClick={() => {
                                setIndexSelected(index)
                            }}
                            icon={item.icon}
                            title={item.title}
                            info={item.info}
                            subItems={item.subItems}
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills
