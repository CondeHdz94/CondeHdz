import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Page from './Pages/Page'
import NavMini from './Components/Navigation'

function App() {
    const [mode, setMode] = useState('white')
    return (
        <BrowserRouter>
            <link
                href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                rel="stylesheet"
            />

            <div className={`mode_${mode}`}>
                <NavMini mode={mode} setMode={setMode} />
                <div className="App">
                    {/* <h1>Navbar...</h1> */}
                    <Routes>
                        <Route path="/page" element={<Page />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
