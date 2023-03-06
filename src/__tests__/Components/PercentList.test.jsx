import { render, screen } from '@testing-library/react'
import React from 'react'
import PercentList from '../../Components/PercentList'

const props = {
    title: 'CSS',
    percent: '85',
    setHeightLi: () => {},
}

describe.only('PercentList test', () => {
    test('subtitle percent list', () => {
        render(
            <PercentList
                title={props.title}
                percent={props.percent}
                setHeightLi={() => {}}
            />
        )

        const subtitle = screen.getByText(/CSS/i)
        expect(subtitle).toBeInTheDocument
    })

    test('percent update', () => {
        render(
            <PercentList
                title={props.title}
                percent={props.percent}
                setHeightLi={() => {}}
            />
        )

        const percentageIncrement =
            screen.getByTestId('t-percentList').textContent
        expect(percentageIncrement).not.toBe(props.percent)

        //screen.debug()
    })
})
