import React from 'react'

function InfoData({ old, info, desc }) {
    return (
        <div className="bg-none">
            <h2 className="bg-none">{old}</h2>
            <small className="bg-none">
                {info}
                <br />
                {desc}
            </small>
        </div>
    )
}

export default InfoData
