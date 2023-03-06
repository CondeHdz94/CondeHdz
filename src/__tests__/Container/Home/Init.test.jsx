import React from 'react'
import { render } from '@testing-library/react'
import Init from '../../../Containers/Home/Init'

describe('Init test', () => {
    it('render', async () => {
        render(<Init />)
    })
})
