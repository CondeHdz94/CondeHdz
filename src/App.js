import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Page from './Pages/Page'
import Navigation from './Components/Navigation'
import ScrollUp from './Components/ScrollUp'

function App() {
    var modecolor = localStorage.getItem('colorMode')
        ? localStorage.getItem('colorMode')
        : 'white'
    var colorAdded = localStorage.getItem('colorAdded')
        ? localStorage.getItem('colorAdded')
        : ''

    const [mode, setMode] = useState(modecolor)
    const [addColor, setAddColor] = useState(colorAdded)
    return (
        <BrowserRouter>
            {/* <figure className="changeFigure"></figure> */}
            <div className={`mode_${mode}${colorAdded && addColor}`}>
                <ScrollUp />
                <Navigation
                    mode={mode}
                    setMode={setMode}
                    addColor={addColor}
                    setAddColor={setAddColor}
                />
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
