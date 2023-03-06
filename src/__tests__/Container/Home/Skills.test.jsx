import React from 'react'
import { render } from '@testing-library/react'
import Skills from '../../../Containers/Home/Skills'

describe('Skills test', () => {
    it('render', async () => {
        render(<Skills />)
    })
})
