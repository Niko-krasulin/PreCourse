let passport = {
    name: "Petr",
    surname: "Petrov",
};
let Passport = JSON.parse(JSON.stringify(passport));
Passport.name = 'Ivan'
console.log(passport)
console.log(Passport)