import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import '../../Stylesheets/Pages/Home/Containers/ContactMe.scss'
import { contactMe } from '../../Data/jsonBase'
import ContactMeInfoCard from '../../Components/ContactMeInfoCard'
import emailjs from '@emailjs/browser'
import Alert from '../../Components/Alert'

// import Loading from '../../Components/Loading'

export default function ContactMe() {
    const [validaEmail, setValidaEmail] = useState(undefined)
    const [stateEmail, setStateEmail] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingValidate, setLoadingValidate] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    const [message, setMessage] = useState('')
    const [typeAlert, setTypeAlert] = useState('')

    const formRef = useRef()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
    } = useForm()

    const onSubmit = (form) => {
        form.Email && setValidaEmail(isValidEmail(form.Email.toLowerCase()))
        setStateEmail(true)
        setLoading(true)
        emailjs
            .sendForm(
                'service_7aw937g',
                'template_phdizga',
                formRef.current,
                '59WgMDHDfj1b3-rqt'
            )
            .then(
                (result) => {
                    setLoadingValidate(true)
                    clearForm()
                    setTimeout(() => {
                        setLoading(false)
                        setLoadingValidate(null)
                    }, 1500)

                    setMessage(result.text)
                    setTypeAlert('success')
                    setShowAlert(true)
                },
                (error) => {
                    setTimeout(() => {
                        setLoading(false)
                        setLoadingValidate(null)
                    }, 1500)
                    setLoadingValidate(false)
                    setMessage(error.text)
                    setTypeAlert('error')
                    setShowAlert(true)
                }
            )
    }

    const clearForm = () => {
        reset({
            Name: null,
            Email: null,
            Project: null,
            Message: null,
        })
        clearErrors(['Name', 'Email'])
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
            <div className="container__form">
                <ul className="bg-none">
                    {contactMe.map((item) => (
                        <ContactMeInfoCard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </ul>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-none"
                >
                    <label className="color--secondary-gray bg-none">
                        Name
                        <input
                            autoComplete="off"
                            alt={'Name'}
                            name="Name"
                            className={
                                errors.Name?.type === 'required'
                                    ? 'input__error'
                                    : ''
                            }
                            type="text"
                            {...register('Name', {
                                required: true,
                                maxLength: 30,
                            })}
                        />
                        {errors.Name?.type === 'required' && (
                            <small className=" errorTag">
                                'Name is required'
                            </small>
                        )}
                    </label>
                    <label className="color--secondary-gray">
                        Email
                        <input
                            autoComplete="off"
                            alt={'Email'}
                            name="Email"
                            className={`bg-none ${
                                errors.Email?.type === 'required' ||
                                (!validaEmail && validaEmail !== undefined)
                                    ? 'input__error'
                                    : ''
                            }`}
                            type="text"
                            // name="email"
                            {...register('Email', {
                                required: true,
                                validate: stateEmail && handleEmailValidation,
                                onChange: handleChange,
                            })}
                        />
                        {errors.Email?.type === 'required' ? (
                            <small className=" errorTag">
                                'Email is required'
                            </small>
                        ) : (
                            !validaEmail &&
                            validaEmail !== undefined && (
                                <small className=" errorTag">
                                    'An email address must contain the following
                                    format: <b>name@example.com</b>'
                                </small>
                            )
                        )}
                    </label>
                    <label className="color--secondary-gray bg-none">
                        Project
                        <input
                            autoComplete="off"
                            alt={'Project'}
                            name="Project"
                            className={
                                errors.Project?.type === 'required'
                                    ? 'input__error'
                                    : ''
                            }
                            type="text"
                            {...register('Project', {
                                required: true,
                                maxLength: 30,
                            })}
                        />
                        {errors.Project?.type === 'required' && (
                            <small className=" errorTag">
                                'Project is required'
                            </small>
                        )}
                    </label>
                    <label className="color--secondary-gray bg-none">
                        Message
                        <textarea
                            autoComplete="off"
                            alt={'MessageArea'}
                            data-testid={`MessageArea`}
                            name="Message"
                            className={
                                errors.Message?.type === 'required'
                                    ? 'input__error'
                                    : ''
                            }
                            type="text"
                            {...register('Message', {
                                required: true,
                                maxLength: 255,
                            })}
                        />
                        {errors.Message?.type === 'required' && (
                            <small className=" errorTag">
                                'Message is required'
                            </small>
                        )}
                    </label>
                    {/* <div className="container__button">
                        <Loading />
                        <input type="submit" onClick={onSubmit} />
                    </div> */}
                    <div className="container__button">
                        <button
                            data-testid={'SubmitBtn'}
                            type="submit"
                            disabled={
                                (loading || loadingValidate !== null) && true
                            }
                            className={`button ${
                                loading &&
                                loadingValidate === null &&
                                'button--loading'
                            } ${loadingValidate && 'button--confirm'} ${
                                loadingValidate === false && 'button--error'
                            }`}
                        >
                            {!loading && (
                                <span className="bg-none">Enviar</span>
                            )}
                            {loadingValidate === false && (
                                <span className="bg-none">!!!</span>
                            )}
                            {loadingValidate && (
                                <span className="bg-none">Success!</span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <Alert
                setShowAlert={setShowAlert}
                showAlert={showAlert}
                type={typeAlert}
                message={message}
            />
        </div>
    )
}
