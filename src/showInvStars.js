const nbstars = Number(process.argv[2])

const showStars = (nbStars) => {
    for (let i = nbStars; i >= 0; i -= 1) {
        console.log('*'.repeat(i))
    }
}

showStars(nbstars)
