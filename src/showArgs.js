/*Ecrivez un script showArgs.js qui prend en arguments de la ligne de commande
plusieurs string et les affiche dans l'ordre inverse de leur ordre d'entrée:*/

let reverse = process.argv.reverse()

const showArgs = () => {
    for (let i = 0; i < reverse.length; i += 1) {
        console.log(reverse[i])
    }
}

if (process.argv.length != 6) {
    console.log("avertissment: showArgs.js ne s'execute pas")
    process.exit(1)
}

showArgs()
