import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Page from './Pages/Page'
import NavMini from './Components/Navigation'

function App() {
    var modecolor = localStorage.getItem('colorMode')
        ? localStorage.getItem('colorMode')
        : 'white'
    const [mode, setMode] = useState(modecolor)
    return (
        <BrowserRouter>
            <div className={`mode_${mode}`}>
                <NavMini mode={mode} setMode={setMode} />
                <div className="App">
                    {/* <h1>Navbar...</h1> */}
                    <Routes>
                        <Route path="/CondeHdz/page" element={<Page />}></Route>
                        <Route path="/CondeHdz" element={<Home />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
