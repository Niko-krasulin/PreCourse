let passport = {
    name: "Petr",
    surname: "Petrov",
};
let newPassport = JSON.parse(JSON.stringify(passport));
newPassport.name = 'Ivan'
console.log(passport)
console.log(newPassport)