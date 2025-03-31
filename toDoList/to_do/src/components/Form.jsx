import { useState } from "react";

const Form = (props) => {
    const {updatedList} = props;
    const [item, setItem] = useState("")

    const submitHandle = (e) => {
        e.preventDefault()
        updatedList({item: item, complete: false})
        setItem("")
    }


    return (
        <>
            <div>
                <form onSubmit={submitHandle}>
                    <label>Insert into list</label>
                    <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}

export default Form;