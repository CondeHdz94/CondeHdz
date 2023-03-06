import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactMeInfoCard from '../../Components/ContactMeInfoCard'

const props = {
    icon: 'smartphone',
    title: 'Call me',
    text: '312 721 6626',
}
describe('ContactMeInfoCard test', () => {
    it('render', () => {
        render(
            <ContactMeInfoCard
                icon={props.icon}
                title={props.title}
                text={props.text}
            />
        )

        const iconError = screen.getByText(/312 721 6626/i)
        expect(iconError).toBeInTheDocument()

        // screen.debug()
    })
})
