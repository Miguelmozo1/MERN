import { faker } from "@faker-js/faker"

const Person = () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    bio: faker.person.bio()
})

export default Person;