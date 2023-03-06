import React from 'react'
import { render } from '@testing-library/react'
import Slide1 from '../../Components/Slide1'

describe('Slide1 test', () => {
    it('render', async () => {
        render(<Slide1 />)
    })
})
