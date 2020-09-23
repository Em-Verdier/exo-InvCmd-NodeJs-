const nbstars = Number(process.argv[2])

const showStars = (nbStars) => {
    for (let i = nbStars; i >= 0; i -= 1) {
        console.log('*'.repeat(i))
    }
}

if (process.argv.length != 3) {
    console.log("avertissment: showInvStars.js ne s'exécute pas")
    process.exit(1)
}

showStars(nbstars)
