import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CollapsedList from '../../Components/CollapsedList'

const props = {
    icon: 'code',
    title: 'Programming',
    info: 'Programming languages',
    iconArrow: 'expand_more',
    subItems: [
        {
            title: 'JavaScript',
            percent: '90',
        },
        {
            title: 'TypeScript',
            percent: '70',
        },
        {
            title: 'Phyton',
            percent: '30',
        },
        {
            title: 'PHP',
            percent: '50',
        },
    ],
    indexIn: 0,
    isSelected: 0,
    setIsSelected: () => {},
}
describe('CollapsedList test', () => {
    it('render', () => {
        render(
            <CollapsedList
                icon={props.icon}
                title={props.title}
                info={props.info}
                iconArrow={props.iconArrow}
                subItems={props.subItems}
                indexIn={props.indexIn}
                isSelected={props.isSelected}
                setIsSelected={props.setIsSelected}
            />
        )

        const subItem = screen.getByText(/PHP/i)
        expect(subItem).toBeInTheDocument

        // screen.debug()
    })

    test('open list', () => {
        render(
            <CollapsedList
                icon={props.icon}
                title={props.title}
                info={props.info}
                subItems={props.subItems}
                indexIn={props.indexIn}
                isSelected={props.isSelected}
                setIsSelected={props.setIsSelected}
            />
        )

        const closeList = screen.getByTestId('t-open-list')
        fireEvent.click(closeList)
        expect(closeList).toBeInTheDocument()
    })
})
