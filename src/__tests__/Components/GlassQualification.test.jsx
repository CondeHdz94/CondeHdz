import React from 'react'
import { render, screen } from '@testing-library/react'
import GlassQualification from '../../Components/GlassQualification'

const props = {
    year: '2010',
    title: 'High School',
    info: 'Corporación Educativa Adventista C.E.A.',
}
describe('GlassQualification test', () => {
    it('render', () => {
        render(
            <GlassQualification
                year={props.year}
                title={props.title}
                info={props.info}
            />
        )

        const iconError = screen.getByText(/2010/i)
        expect(iconError).toBeInTheDocument()

        // screen.debug()
    })
})
