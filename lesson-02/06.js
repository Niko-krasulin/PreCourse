let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let PassportWithAddress = JSON.parse(JSON.stringify(passportWithAddress))
PassportWithAddress.address.city = 'Bobryisk'
console.log(passportWithAddress.address.city)
console.log(PassportWithAddress.address.city)