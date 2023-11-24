const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    let a = colors.filter(item => item === 'черный' || item === 'красный' || item === 'желтый' )
    return a.join('-')
}

console.log(createColorString());
