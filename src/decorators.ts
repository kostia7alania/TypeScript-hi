const person = {name: 'John'}
function addAge(age) {
    return function (person) {
        return {
            age, 
            name: person.name
        }
    }
}

export const newPerson = addAge(30)(person)
console.warn(newPerson)
