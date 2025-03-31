import Person from "../models/person.model.js";
import Car from "../models/car.model.js";

const createMatch = (req, res) => {
    const fakePerson = Person()
    const fakeCar = Car()
    const all = {
        person: fakePerson,
        car: fakeCar
    }
    res.json(all)
}

// async function createMatch (req, res) {
//     try{
//         const fakePerson = await Person()
//         const fakeCar = await Car()
//         const all = {
//             person: fakePerson,
//             car: fakeCar
//         }
//         res.json(all)
//     } catch(error) {
//         console.log(error)
//         res.status(400).json(error)
//     }
// }

export { createMatch }