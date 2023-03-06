import React from 'react'
import { render, screen } from '@testing-library/react'
import Discount from '../../../Containers/Home/Discount'

describe('Discount test', () => {
    it('render', async () => {
        render(<Discount />)
    })
})
