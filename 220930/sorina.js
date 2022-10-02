const person = (name) => {

    const greeting =() => {
        console.log(`${name} says hi`);
    }
    
    return greeting
}

const returnPerson = person('George')
returnPerson()



const secondPerson = person('Nina')
secondPerson()