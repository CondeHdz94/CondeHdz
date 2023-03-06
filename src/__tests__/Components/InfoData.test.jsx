import React from 'react'
import { render, screen } from '@testing-library/react'
import InfoData from '../../Components/InfoData'

const props = {
    old: '04+',
    info: 'Years',
    desc: 'experience',
}
describe('InfoData test', () => {
    it('render', () => {
        render(<InfoData old={props.old} info={props.info} desc={props.desc} />)

        const iconError = screen.getByText(/Years/i)
        expect(iconError).toBeInTheDocument()

        // screen.debug()
    })
})
