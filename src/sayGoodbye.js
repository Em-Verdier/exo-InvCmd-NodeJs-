/* Ecrivez un script sayGoodbye.js qui prend 
en argument de la ligne de commande une string 
et affiche un message comme ci-dessous: */

if (process.argv.length != 3) {
    console.log('caution: sayGoodbye.js not executed, too much words')
    process.exit(1)
}

if (!isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} not characters`)
    process.exit(1)
}

let string = process.argv[2]
console.log(`Goodbye, ${string}`)
