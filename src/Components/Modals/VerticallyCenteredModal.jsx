import React from 'react'
import '../../Stylesheets/Components/Modals/VerticallyCenteredModal.scss'

export default function VerticallyCenteredModal({
    show,
    setModalShow,
    info,
    title,
}) {
    // const [showModal, setshowModal] = useState(false)

    // useEffect(() => {
    //     setshowModal(show)
    // }, [show])

    return (
        <>
            {show && (
                <div className={`modal`}>
                    <div
                        className={`modal__container ${
                            show ? 'modal--open' : 'modal--close'
                        }`}
                    >
                        <h2>{title}</h2>
                        <ul className="bg-none ">
                            {info.map((item, id) => (
                                <li key={`${item}_modal_id-${id}`}>
                                    <span className="material-icons-outlined">
                                        arrow_right
                                    </span>
                                    <p>{item.label}</p>
                                </li>
                            ))}
                        </ul>
                        <span
                            data-testid="t-close-modal"
                            name="icon_close_modal"
                            className="modal__close material-icons-outlined"
                            onClick={() => setModalShow(false)}
                        >
                            highlight_off
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}
