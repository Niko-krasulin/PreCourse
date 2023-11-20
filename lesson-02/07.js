let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let PassportMarried = {...passportMarried, married: true}
console.log(passportMarried)
console.log(PassportMarried)