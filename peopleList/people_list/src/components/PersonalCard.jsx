import { useState } from "react";

const PersonalCard = (props) => {
    const {person} = props
    const [age, setAge] = useState(person.age)
    return (
        <>
            <div>
                <h1>Name: {person.fullName}</h1>
                <p>Age: {age}</p>
                <p>Hobby: {person.hobby}</p>
                <button onClick={ () => setAge(age + 1)}>Birthday button for {person.fullName}</button>
            </div>
        </>
    )
}

export default PersonalCard;