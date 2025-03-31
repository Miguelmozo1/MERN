const Display = (props) => {
    const {list, isComplete, removeItem} = props
    return (
        <>
            {
                list.map((item, index) => (
                    <div key={index} style={{display: "flex", justifyContent: "center"}}>
                        <p>{item.item}</p>
                        <input type="checkbox" onChange={() =>{isComplete(item)}}/>
                        <button onClick={() => {removeItem(item.item)}}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default Display;