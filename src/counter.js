const min = Number(process.argv[2])
const max = Number(process.argv[3])
const step = Number(process.argv[4])

const count = (min, max, step) => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

count(min, max, step)
