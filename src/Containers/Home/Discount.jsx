import React from 'react'
import '../../Stylesheets/Pages/Home/Containers/Discount.scss'

export default function Discount() {
    return (
        <div className="bg-black container__full">
            <div className="container container__discount bg-none">
                <div className="container__info bg-none">
                    <h1 className="color--white bg-none">
                        If you have a new project{' '}
                    </h1>
                    <h3 className="color--secondary-gray bg-none">
                        Contact me now and get a 30% discount on your first
                        project!
                    </h3>
                </div>
                <div className="Circle"></div>
            </div>
        </div>
    )
}
