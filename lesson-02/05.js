let passport = {
    name: "Petr",
    surname: "Petrov",
};
let Passport = JSON.parse(JSON.stringify(passport));
Passport.name = 'Ivan'
console.log(passport.name)
console.log(Passport.name)