import { faker } from "@faker-js/faker"

const Car = () => ({
    vehicle: faker.vehicle.vehicle(),
    type: faker.vehicle.type() ,
    manufacturer: faker.vehicle.manufacturer(),
    color: faker.vehicle.color()
})

export default Car;