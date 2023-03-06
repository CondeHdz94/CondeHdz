import React from 'react'
import { render } from '@testing-library/react'
import About from '../../../Containers/Home/About'

describe('About test', () => {
    it('render', async () => {
        render(<About />)
    })
})
