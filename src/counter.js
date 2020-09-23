const min = Number(process.argv[2])
const max = Number(process.argv[3])
const step = Number(process.argv[4])

const count = (min, max, step) => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

if (process.argv.length != 5) {
    console.log("avertissment: counter.js ne s'execute pas")
    process.exit(1)
}

count(min, max, step)
