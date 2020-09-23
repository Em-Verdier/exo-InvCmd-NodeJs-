const num = process.argv[2]

const isOdd = (num) => {
    return num % 2 === 1
}

if (process.argv.length != 3) {
    console.log("avertissment: oddTest.js ne s'execute pas")
    process.exit(1)
}
console.log(isOdd(num))
