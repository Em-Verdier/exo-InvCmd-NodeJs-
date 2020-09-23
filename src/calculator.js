const operator = process.argv[2]
const a = Number(process.argv[3])
const b = Number(process.argv[4])

const add = (a, b) => {
    return a + b
}
const sub = (a, b) => {
    return a - b
}
const mul = (a, b) => {
    return a * b
}
const div = (a, b) => {
    return a / b
}

const calc = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b)
            break
        case '-':
            return sub(a, b)
            break
        case '*':
            return mul(a, b)
            break
        case '/':
            return div(a, b)
        default:
            break
    }
}

console.log(calc(operator, a, b))
