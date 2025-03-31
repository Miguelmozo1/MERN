import React, { useState } from "react"

const Form = (props) => {
    const {squareList, setSquareList} = props

    const [size, setSize] = useState("")
    const [color, setColor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSquareList([...squareList, {color: color, size: size + "px"}])
        setColor("")
        setSize("")
    }

    return (
        <>
            <div>
                <h1>Square Generator</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Color</label>
                        <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                    </div>
                    <div>
                        <label>Size</label>
                        <input type="text" name="size" value={size} onChange={(e) => setSize(e.target.value)}/>
                        <label>(pixels)</label>
                    </div>
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default Form