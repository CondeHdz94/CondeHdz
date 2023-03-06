import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ScrollUp from '../../Components/ScrollUp'

describe('ScrollUp test', () => {
    it('render and scroll it in Y', async () => {
        render(<ScrollUp />)

        await fireEvent.scroll(window, { target: { scrollY: 500 } })

        // screen.debug()
    })
})
