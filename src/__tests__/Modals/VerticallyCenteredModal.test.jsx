import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import VerticallyCenteredModal from '../../Components/Modals/VerticallyCenteredModal'

const props = {
    show: true,
    info: [
        {
            value: 0,
            label: 'Design the user interface',
        },
        {
            value: 1,
            label: 'Study the best Ui and UX',
        },
        {
            value: 2,
            label: 'Great study of target audience',
        },
    ],
    title: 'UI and UX Design',
    setModalShow: () => {},
}

describe('VerticallyCenteredModal test', () => {
    test('renders the modal and validation of a subtitle', () => {
        render(
            <VerticallyCenteredModal
                show={props.show}
                info={props.info}
                title={props.title}
                setModalShow={props.setModalShow}
            />
        )
        //screen.debug() // is a console.log of our HTML for testing

        const subtitle = screen.getByText(/UI and UX Design/i)
        expect(subtitle).toBeInTheDocument()
    })

    test('list elemets', () => {
        render(
            <VerticallyCenteredModal
                show={props.show}
                info={props.info}
                title={props.title}
                setModalShow={props.setModalShow}
            />
        )
        //screen.debug() // is a console.log of our HTML for testing

        const list = screen.getByText(/UI and UX Design/i)
        expect(list).toBeInTheDocument()
    })

    test('close modal', () => {
        render(
            <VerticallyCenteredModal
                show={props.show}
                info={props.info}
                title={props.title}
                setModalShow={props.setModalShow}
            />
        )

        const closeModal = screen.getByTestId('t-close-modal')
        fireEvent.click(closeModal)
        expect(closeModal).toBeInTheDocument()
    })
})
