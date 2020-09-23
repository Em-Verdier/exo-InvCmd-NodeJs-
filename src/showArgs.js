let reverse = process.argv.reverse()

const showArgs = () => {
    for (let i = 0; i <= reverse.length - 3; i += 1) {
        console.log(reverse[i])
    }
}

if (process.argv.length != 6) {
    console.log("avertissment: showArgs.js ne s'execute pas")
    process.exit(1)
}

showArgs()
