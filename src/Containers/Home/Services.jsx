import React, { useState } from 'react'
import '../../Stylesheets/Pages/Home/Containers/Services.scss'
import { services } from '../../Data/jsonBase'
import InformacionViewMore from '../../Components/InformacionViewMore'
import VerticallyCenteredModal from '../../Components/Modals/VerticallyCenteredModal'

export default function Services() {
    const [modalShow, setModalShow] = useState(false)
    const [infoModalList, setInfoModalList] = useState({})
    const [modalTitle, setModalTitle] = useState('')

    return (
        <>
            <VerticallyCenteredModal
                show={modalShow}
                setModalShow={setModalShow}
                info={infoModalList}
                title={modalTitle}
            />
            <div
                className="container container__services bg-none "
                id="Services"
            >
                <div className="container__info bg-none">
                    <h2 className="color--black title align-self--center bg-none">
                        Services
                    </h2>
                    <p className="color--secondary-gray align-self--center bg-none">
                        My services
                    </p>
                    <ul className="bg-none">
                        {services.map((item, index) => {
                            return (
                                <InformacionViewMore
                                    key={`${item.title}_listService`}
                                    value={index}
                                    icon={item.icon}
                                    title={item.title}
                                    info={item.info}
                                    setInfoModalList={setInfoModalList}
                                    setModalShow={setModalShow}
                                    setModalTitle={setModalTitle}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
