import React from 'react'

const Display = (props) => {
    const {squareList} = props
    return (
        <>
            {
                squareList.map((square, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        backgroundColor: square.color,
                        width: square.size,
                        height: square.size
                    }}>
                    </div>
                ))
            }
        </>
    )
}

export default Display