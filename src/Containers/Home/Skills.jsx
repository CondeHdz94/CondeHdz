import React, { useState } from 'react'
import CollapsedList from '../../Components/CollapsedList'
import '../../Stylesheets/Pages/Home/Containers/Skills.scss'
import { dataSkills, dataIconSkills } from '../../Data/jsonBase'
import { SKILL_TYPE } from '../../Constants/ConstantsValues'
import IconList from '../../Components/IconList'

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
                {SKILL_TYPE === 0 && (
                    <ul className="skill__list ">
                        {dataSkills.map((item, index) => (
                            <CollapsedList
                                key={item.icon}
                                indexIn={index}
                                icon={item.icon}
                                title={item.title}
                                info={item.info}
                                subItems={
                                    isSelected === index ? item.subItems : []
                                }
                                isSelected={isSelected}
                                setIsSelected={setIsSelected}
                            />
                        ))}
                    </ul>
                )}

                {SKILL_TYPE === 1 && (
                    <ul className="skill__list--badges bg-none">
                        {dataIconSkills.map((item, index) => (
                            <IconList
                                key={item.icon}
                                indexIn={item.id}
                                icon={item.icon}
                                title={item.title}
                                info={item.info}
                                subItems={item.subItems}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Skills
