import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Alert from '../../Components/Alert'

describe('Alert test', () => {
    it('render', () => {
        render(<Alert showAlert={false} />)

        const iconError = screen.getByText(/error_outline/i)
        expect(iconError).toBeInTheDocument()

        //screen.debug()
    })

    it('Alert state', () => {
        render(<Alert showAlert={true} />)
    })
})
