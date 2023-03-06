import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Navigation from '../../Components/Navigation'

const props = {
    mode: 'white',
    addColor: '--purple',
    setMode: () => {},
    setAddColor: () => {},
}
describe('Navigation test', () => {
    it('render', () => {
        render(
            <Navigation
                mode={props.mode}
                addColor={props.addColor}
                setMode={props.setMode}
                setAddColor={props.setAddColor}
            />
        )

        // screen.debug()
    })
    it('render click', () => {
        render(
            <Navigation
                mode={props.mode}
                addColor={props.addColor}
                setMode={props.setMode}
                setAddColor={props.setAddColor}
            />
        )

        const toggle = screen.getByTestId('t-toggle-menu')
        fireEvent.click(toggle)
        expect(toggle).toBeInTheDocument()
    })

    it('render click on item', () => {
        const { container } = render(
            <Navigation
                mode={props.mode}
                addColor={props.addColor}
                setMode={props.setMode}
                setAddColor={props.setAddColor}
            />
        )
        expect(container.getElementsByClassName('list-menu-1').length).toBe(1)

        fireEvent.click(screen.getAllByText(/Contact Me/i)[1])
    })

    it('render click on dark mode', () => {
        render(
            <Navigation
                mode={props.mode}
                addColor={props.addColor}
                setMode={props.setMode}
                setAddColor={props.setAddColor}
            />
        )

        fireEvent.click(screen.getByTestId('t-toggle-dark-mode'))
    })
})
