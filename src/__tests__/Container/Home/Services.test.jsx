import React from 'react'
import { render } from '@testing-library/react'
import Services from '../../../Containers/Home/Services'

describe('Services test', () => {
    it('render', async () => {
        render(<Services />)
    })
})
