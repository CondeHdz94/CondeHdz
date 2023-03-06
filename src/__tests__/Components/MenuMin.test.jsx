import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import MenuMin from '../../Components/MenuMin'

const props = {
    showMenu: () => {},
    setShowMenu: () => {},
    setColorTheme: () => {},
}
describe('MenuMin test', () => {
    it('render', () => {
        render(
            <MenuMin
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                setColorTheme={props.setColorTheme}
            />
        )

        const itemList = screen.getByText(/Contact Me/i)
        expect(itemList).toBeInTheDocument()

        //screen.debug()
    })

    it('click color blue', () => {
        render(
            <MenuMin
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                setColorTheme={props.setColorTheme}
            />
        )

        const colorBlue = screen.getByTestId('t-color-blue')
        fireEvent.click(colorBlue)
        expect(colorBlue).toBeInTheDocument()
    })

    it('click color red', () => {
        render(
            <MenuMin
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                setColorTheme={props.setColorTheme}
            />
        )

        const colorRed = screen.getByTestId('t-color-red')
        fireEvent.click(colorRed)
        expect(colorRed).toBeInTheDocument()
    })

    it('click color green', () => {
        render(
            <MenuMin
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                setColorTheme={props.setColorTheme}
            />
        )

        const colorGreen = screen.getByTestId('t-color-green')
        fireEvent.click(colorGreen)
        expect(colorGreen).toBeInTheDocument()
    })

    it('click color purple', () => {
        render(
            <MenuMin
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                setColorTheme={props.setColorTheme}
            />
        )

        const colorPurple = screen.getByTestId('t-color-purple')
        fireEvent.click(colorPurple)
        expect(colorPurple).toBeInTheDocument()
    })

    it('click color gray', () => {
        render(
            <MenuMin
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                setColorTheme={props.setColorTheme}
            />
        )

        const colorGray = screen.getByTestId('t-color-gray')
        fireEvent.click(colorGray)
        expect(colorGray).toBeInTheDocument()
    })
    it('click to link list', () => {
        render(
            <MenuMin
                showMenu={props.showMenu}
                setShowMenu={props.setShowMenu}
                setColorTheme={props.setColorTheme}
            />
        )

        const clickInList = screen.getByText('Services')
        fireEvent.click(clickInList)
        expect(clickInList).toBeInTheDocument()
    })
})
