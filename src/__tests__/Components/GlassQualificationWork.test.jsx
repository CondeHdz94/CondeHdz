import React from 'react'
import { render, screen } from '@testing-library/react'
import GlassQualificationWork from '../../Components/GlassQualificationWork'

const props = {
    index: 2,
    title: 'UNI2',
    info: 'Microcredit entity focused on financing and opening formal credit opportunities.',
}
describe('GlassQualificationWork test', () => {
    it('render', () => {
        render(
            <>
                <GlassQualificationWork
                    index={props.index}
                    title={props.title}
                    info={props.info}
                />
            </>
        )

        const iconError = screen.getByText(/UNI2/i)
        expect(iconError).toBeInTheDocument()

        // screen.debug()
    })
})

describe('GlassQualificationWork test intercalated', () => {
    it('render', () => {
        render(
            <>
                <GlassQualificationWork
                    index={1}
                    title={props.title}
                    info={props.info}
                />
            </>
        )
    })
})
