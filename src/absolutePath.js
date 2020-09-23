const Tree = process.argv[1] // on set l'index de l'input

const path = (files) => {
    // function path pour afficher le chemin absolut prenant un argument files
    return console.log(files)
}
if (process.argv.length != 2) {
    console.log("avertissment: absolutePath.js ne s'exécute pas")
    process.exit(1)
}

path(Tree) //Appel de la fonction path avec argument Tree (pour afficher chemin absolu du fichier ciblé index 1)
