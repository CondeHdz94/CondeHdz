import React, { useEffect } from 'react'

export default function Alert({
    children,
    type,
    message,
    showAlert,
    setShowAlert,
}) {
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
    }, [showAlert, setShowAlert])
    return (
        <div
            className={`alert ${type} ${showAlert ? 'showAlert' : 'hideAlert'}`}
        >
            <span className="material-icons-outlined bg-none">
                error_outline
            </span>
            <small className="bg-none">{message}</small>
        </div>
    )
}
