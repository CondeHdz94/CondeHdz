import React, { useEffect, useState } from 'react'
// import Clouds1SVG from './SVG/Clouds1SVG'
// import Clouds2SVG from './SVG/Clouds2SVG'
// import CloudsBackgroundSVG from './SVG/CloudsBackgroundSVG'
// import CloudsFrontSVG from './SVG/CloudsFrontSVG'
// import ImageEllipse from '../Img/Home/Bg/Ellipse.svg'
import ImageEllipseSVG from '../Components/SVG/ImageEllipseSVG'
import ImagePolygonSVG from './SVG/ImagePolygonSVG'
import ImageRectangleSVG from './SVG/ImageRectangleSVG'
import Slide1 from './Slide1'

import useWindowDimensions from '../Hooks/useWindowDimensions'

function BackgroundShapes() {
    const { /*height,*/ width } = useWindowDimensions()
    const [offSetY, setOffSetY] = useState(0)
    const handleScroll = () => setOffSetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <ImageEllipseSVG offSetY={offSetY} valueX={0.5} />
            <ImagePolygonSVG offSetY={offSetY} valueX={0.6} />
            <ImageRectangleSVG offSetY={offSetY} valueX={0.7} />
            <Slide1
                top={`${670 - width * 0.9}px`}
                offSetY={offSetY}
                valueX={0.1}
            />
            {/* <CloudsBackgroundSVG
                top={'2150px'}
                offSetY={offSetY}
                valueX={0.2}
            /> */}
            {/* <CloudsFrontSVG
                top={`${2200 + width * 0.05}px`}
                offSetY={offSetY}
                valueX={0.2}
            /> */}
            {/* <Clouds1SVG top={'1800px'} offSetY={offSetY} valueX={0.22} />
            <Clouds2SVG top={'1800px'} offSetY={offSetY} valueX={0.2} /> */}
            {/* <div
                className="__background-ellipse"
                style={{
                    transform: `translateY(${offSetY * 0.5}px)`,
                }}
            ></div> */}
        </>
    )
}

export default BackgroundShapes
