let string = process.argv[2]
console.log(`Goodbye, ${string}`)

if (process.argv.length != 3) {
    console.log("avertissment: sayGoodbye.js ne s'execute pas")
    process.exit(1)
}
