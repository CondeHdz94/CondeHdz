import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ContactMe from '../../../Containers/Home/ContactMe'
import '@testing-library/jest-dom/extend-expect'

const setup = () => {
    const utils = render(<ContactMe />)
    const name = screen.getByAltText('Name')
    const email = screen.getByAltText('Email')
    const project = screen.getByAltText('Project')
    const message = screen.getByTestId('MessageArea')
    const submit = screen.getByTestId('SubmitBtn')
    return {
        name,
        email,
        project,
        message,
        submit,
        ...utils,
    }
}

describe('ContactMe test', () => {
    it('render name', async () => {
        render(<ContactMe />)
        const name = screen.getByAltText('Name')

        fireEvent.change(name, { target: { value: 'Test' } })
        await waitFor(() => {
            expect(name.value).toBe('Test')
        })

        // fireEvent.click(submit)
        // screen.debug()
    })
    it('test email', async () => {
        render(<ContactMe />)
        const email = screen.getByAltText('Email')

        fireEvent.change(email, { target: { value: 'mail@gmail.com' } })
        await waitFor(() => {
            expect(email.value).toBe('mail@gmail.com')
        })
    })

    it('test project', async () => {
        render(<ContactMe />)
        const project = screen.getByAltText('Project')

        fireEvent.change(project, { target: { value: 'Testing' } })
        await waitFor(() => {
            expect(project.value).toBe('Testing')
        })
    })

    it('test message', async () => {
        render(<ContactMe />)
        const message = screen.getByTestId('MessageArea')

        fireEvent.change(message, {
            target: { value: 'Testing a text message' },
        })
        await waitFor(() => {
            expect(message.value).toBe('Testing a text message')
        })
    })

    it('test submit', async () => {
        render(<ContactMe />)
        const submit = screen.getByTestId('SubmitBtn')

        fireEvent.click(submit)
    })

    it('test full submit', async () => {
        render(<ContactMe />)
        const name = screen.getByAltText('Name')
        const email = screen.getByAltText('Email')
        const project = screen.getByAltText('Project')
        const message = screen.getByTestId('MessageArea')
        const submit = screen.getByTestId('SubmitBtn')

        fireEvent.change(name, { target: { value: 'Test' } })
        fireEvent.change(email, { target: { value: 'mail@gmail.com' } })
        fireEvent.change(project, { target: { value: 'Testing' } })
        fireEvent.change(message, {
            target: { value: 'Testing a text message' },
        })

        fireEvent.click(submit)
    })

    // it('test fail submit', async () => {
    //     const { name, email, project, message, submit } = setup()

    //     fireEvent.change(name, { target: { value: 'Test1' } })
    //     fireEvent.change(email, { target: { value: 'mail@gmail.com' } })
    //     fireEvent.change(project, { target: { value: 'Testing' } })
    //     fireEvent.change(message, {
    //         target: { value: 'Testing a text message' },
    //     })

    //     fireEvent.click(submit)
    // })

    // it('test error submit', async () => {
    //     const { name, email, project, message, submit } = setup()

    //     fireEvent.change(name, { target: { value: 'Test' } })
    //     fireEvent.change(email, { target: { value: 'mailError' } })
    //     fireEvent.change(project, { target: { value: 'Testing' } })
    //     fireEvent.change(message, {
    //         target: { value: 'Testing a text message' },
    //     })
    //     fireEvent.click(submit)
    // })
})

// // describe('ContactMe test', () => {
// //     it('render name', async () => {
// //         const { name, email, project, message } = setup()

// //         fireEvent.change(name, { target: { value: 'Test' } })
// //         await waitFor(() => {
// //             expect(name.value).toBe('Test')
// //         })

// //         // fireEvent.click(submit)
// //         // screen.debug()
// //     })
// //     it('test email', async () => {
// //         const { email } = setup()
// //         fireEvent.change(email, { target: { value: 'mail@gmail.com' } })
// //         await waitFor(() => {
// //             expect(email.value).toBe('mail@gmail.com')
// //         })
// //     })

// //     it('test project', async () => {
// //         const { project } = setup()

// //         fireEvent.change(project, { target: { value: 'Testing' } })
// //         await waitFor(() => {
// //             expect(project.value).toBe('Testing')
// //         })
// //     })

// //     it('test message', async () => {
// //         const { message } = setup()

// //         fireEvent.change(message, {
// //             target: { value: 'Testing a text message' },
// //         })
// //         await waitFor(() => {
// //             expect(message.value).toBe('Testing a text message')
// //         })
// //     })

// //     it('test submit', async () => {
// //         const { submit } = setup()
// //         fireEvent.click(submit)
// //     })

// //     it('test full submit', async () => {
// //         const { name, email, project, message, submit } = setup()

// //         fireEvent.change(name, { target: { value: 'Test' } })
// //         fireEvent.change(email, { target: { value: 'mail@gmail.com' } })
// //         fireEvent.change(project, { target: { value: 'Testing' } })
// //         fireEvent.change(message, {
// //             target: { value: 'Testing a text message' },
// //         })

// //         fireEvent.click(submit)
// //     })

// //     // it('test error submit', async () => {
// //     //     const { name, email, project, message, submit } = setup()

// //     //     fireEvent.change(name, { target: { value: 'Test' } })
// //     //     fireEvent.change(email, { target: { value: 'mailError' } })
// //     //     fireEvent.change(project, { target: { value: 'Testing' } })
// //     //     fireEvent.change(message, {
// //     //         target: { value: 'Testing a text message' },
// //     //     })
// //     //     fireEvent.click(submit)
// //     // })
// // })
