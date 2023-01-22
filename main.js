let head = document.querySelector(".mini")

// ordre des gifs 
let gifs = ["0", "0", "1", "1", "2", "2"]

let row = 3

let victory = 0

let precedent = "carte_22"

const miniature = document.getElementById("min")

//on mélange pour pimenter la partie
function shuffleArray(gifs){
    gifs.sort(()=> Math.random() - 0.5);
}

//victoire: on play l musique et on lance les gifs de victoire
function win(){
    const aud = document.getElementById("audio")

    aud.insertAdjacentHTML("afterbegin", `<audio autoplay id="audio" src="victory_theme.mp3">
    </audio>`)  

    aud.style.backgroundImage = `url("victoire.gif")`

    aud.style.backgroundSize = "cover"

    let i = 1

    // on fait une boucle pour insérer le gif de victoire sur toutes les divs.
    while (i < 7) {

        eval(`carte_${i}`).style.backgroundImage = `url("victoire.gif")`
        i=i+1
    }

}

// fonction principale qui 
const jeu = (numero_carte) => {
    //on test si la carte à déjà été trouvée, pour éviter de pouvoir recliquer dessus.
    let carBG = eval(`carte_${numero_carte}`).style.backgroundImage
    if (carBG != "" && carBG != `url("dos.png")` ){
        console.log(carBG)
        return 
    }
    eval(`carte_${numero_carte}`).style.backgroundImage = `url("gif_${gifs[`${numero_carte-1}`]}.gif")`

    //on vérifie avec la variable row si on à déjà cliqué sur une autre image. 
    //Et sinon, on place notre carte dans la variable précédent pour la comparer avec la suivante.
    if (row == 3) {
        row = Number(gifs[Number(`${numero_carte-1}`)])
        precedent = `carte_${numero_carte}`
    } 
    else if (row == Number(gifs[Number(`${numero_carte-1}`)])) {
        document.body.style.backgroundColor = "green"

        setTimeout(() => {
            document.body.style.backgroundColor = "lightblue"
        }, 1000)

        row = 3

        //on incrémente de 1 la victoire, lorsqu'on arrive à 3 on à gagné.
        victory = victory + 1


        if (victory == 3) {
            win()
        }
        
    }
    else {
        document.body.style.backgroundColor = "brown"

        setTimeout(() => {
            document.body.style.backgroundColor = "lightblue"
            eval(`carte_${numero_carte}`).style.backgroundImage = `url("dos.png")`
            eval(precedent).style.backgroundImage = `url("dos.png")`
        }, 1000)
        
        row = 3
    }
}

//on mélange le tableau des  gifs pour que l'ordre change à chaque tour.
shuffleArray(gifs);

console.log(gifs);


//donner à chaque div un listener et un nom. Puis on lance le jeu.
const carte_1 = document.getElementById("1")
carte_1.addEventListener("click", () => {

    jeu(1)

})

const carte_2 = document.getElementById("2")
carte_2.addEventListener("click", () => {

    jeu(2)

})


const carte_3 = document.getElementById("3")
carte_3.addEventListener("click", () => {

    jeu(3)

})


const carte_4 = document.getElementById("4")
carte_4.addEventListener("click", () => {

    jeu(4)


})

const carte_5 = document.getElementById("5")
carte_5.addEventListener("click", () => {

    jeu(5)


})

const carte_6 = document.getElementById("6")
carte_6.addEventListener("click", () => {

    jeu(6)


})


 






