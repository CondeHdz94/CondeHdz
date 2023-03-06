import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import InformacionViewMore from '../../Components/InformacionViewMore'

const props = {
    icon: 'code',
    title: 'Frontend Development',
    info: [
        {
            value: 0,
            label: 'Develop the user interface',
        },
        {
            value: 1,
            label: 'Web page develpment',
        },
        {
            value: 2,
            label: 'Great study of styles and colors',
        },
        {
            value: 3,
            label: 'Create a UX element interactions',
        },
    ],
    setModalShow: () => {},
    setInfoModalList: () => {},
    setModalTitle: () => {},
}
describe('InformacionViewMore test', () => {
    it('render', () => {
        render(
            <InformacionViewMore
                icon={props.icon}
                title={props.title}
                setModalShow={props.setModalShow}
                info={props.info}
                setModalTitle={props.setModalTitle}
                setInfoModalList={props.setInfoModalList}
            />
        )

        const iconError = screen.getByText(/Frontend Development/i)
        expect(iconError).toBeInTheDocument()

        // screen.debug()
    })
    it('click', () => {
        render(
            <InformacionViewMore
                icon={props.icon}
                title={props.title}
                setModalShow={props.setModalShow}
                info={props.info}
                setModalTitle={props.setModalTitle}
                setInfoModalList={props.setInfoModalList}
            />
        )

        const openInfo = screen.getByTestId('t-open-information')
        fireEvent.click(openInfo)
        expect(openInfo).toBeInTheDocument()
    })
})
