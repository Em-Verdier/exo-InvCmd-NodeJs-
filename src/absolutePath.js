const Tree = process.argv[1] // on set l'index de l'input

const path = (files) => {
    // function path pour afficher le chemin absolut prenant un argument files
    return console.log(files)
}

path(Tree) //Appel de la fonction path avec argument Tree (pour afficher chemin absolu du fichier ciblé index 1)
