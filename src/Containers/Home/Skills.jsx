import React, { useState } from 'react'
import CollapsedList from '../../Components/CollapsedList'
import '../../Stylesheets/Pages/Home/Containers/Skills.scss'
import { dataSkills } from '../../Data/jsonBase'

function Skills() {
    const [isSelected, setIsSelected] = useState(null)

    return (
        <div className="container container__skills bg-none" id="Skills">
            <div className="container__info bg-none">
                <h2 className="color--black title align-self--center bg-none">
                    Skills
                </h2>
                <p className="color--secondary-gray align-self--center bg-none">
                    My technical level
                </p>

                <ul className="skill__list ">
                    {dataSkills.map((item, index) => (
                        <CollapsedList
                            key={index}
                            indexIn={index}
                            icon={item.icon}
                            title={item.title}
                            info={item.info}
                            subItems={isSelected === index ? item.subItems : []}
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
