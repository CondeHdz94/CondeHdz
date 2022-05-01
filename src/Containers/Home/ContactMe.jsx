import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import '../../Stylesheets/Pages/Home/Containers/ContactMe.scss'
import { contactMe } from '../../Data/jsonBase'
import ContactMeInfoCard from '../../Components/ContactMeInfoCard'
import emailjs from '@emailjs/browser'

export default function ContactMe() {
    const [validaEmail, setValidaEmail] = useState(undefined)
    const [stateEmail, setStateEmail] = useState(false)

    const formRef = useRef()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (form) => {
        setValidaEmail(isValidEmail(form.Email.trim()))
        setStateEmail(true)
        emailjs
            .sendForm(
                'service_7aw937g',
                'template_phdizga',
                formRef.current,
                '59WgMDHDfj1b3-rqt'
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    const isValidEmail = (email) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email.trim()
        )

    const handleEmailValidation = (email) => {
        const isValid = isValidEmail(email)
        setValidaEmail(isValid)

        return isValid
    }

    const handleChange = (e) => (e.target.value = e.target.value.trim())

    return (
        <div className="container container__contactMe bg-none" id="Contact">
            <div className="container__info bg-none">
                <h2 className="color--black title align-self--center bg-none">
                    Contact Me
                </h2>
                <p className="color--secondary-gray align-self--center bg-none">
                    Get in touch
                </p>
            </div>
            <ul className="">
                {contactMe.map((item, index) => (
                    <ContactMeInfoCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </ul>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <label className="color--secondary-gray">Name</label>
                <input
                    name="Name"
                    className={
                        errors.Name?.type === 'required' ? 'input__error' : ''
                    }
                    type="text"
                    {...register('Name', { required: true, maxLength: 30 })}
                />
                {errors.Name?.type === 'required' && (
                    <small className=" errorTag">'Name is required'</small>
                )}
                <label className="color--secondary-gray">Email</label>
                <input
                    name="Email"
                    className={
                        errors.Email?.type === 'required' ||
                        (!validaEmail && validaEmail !== undefined)
                            ? 'input__error'
                            : ''
                    }
                    type="text"
                    // name="email"
                    {...register('Email', {
                        required: true,
                        validate: stateEmail && handleEmailValidation,
                        onChange: handleChange,
                    })}
                />
                {errors.Email?.type === 'required' ? (
                    <small className=" errorTag">'Email is required'</small>
                ) : (
                    !validaEmail &&
                    validaEmail !== undefined && (
                        <small className=" errorTag">
                            'An email address must contain the following format:{' '}
                            <b>name@example.com</b>'
                        </small>
                    )
                )}
                <label className="color--secondary-gray">Project</label>
                <input
                    name="Project"
                    className={
                        errors.Project?.type === 'required'
                            ? 'input__error'
                            : ''
                    }
                    type="text"
                    {...register('Project', { required: true, maxLength: 30 })}
                />
                {errors.Project?.type === 'required' && (
                    <small className=" errorTag">'Project is required'</small>
                )}
                <label className="color--secondary-gray">Message</label>
                <textarea
                    name="Message"
                    className={
                        errors.Message?.type === 'required'
                            ? 'input__error'
                            : ''
                    }
                    type="text"
                    {...register('Message', { required: true, maxLength: 255 })}
                />
                {errors.Message?.type === 'required' && (
                    <small className=" errorTag">'Message is required'</small>
                )}
                <input type="submit" />
            </form>
        </div>
    )
}
