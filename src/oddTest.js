const num = process.argv[2]

const isOdd = (num) => {
    return num % 2 === 1
}

console.log(isOdd(num))
