import React from 'react'
import { render } from '@testing-library/react'
import Social from '../../../Containers/Home/Social'

describe('Social test', () => {
    it('render', async () => {
        render(<Social />)
    })
})
