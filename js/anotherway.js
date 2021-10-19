// seconda versione

const btnSubmit = document.getElementById("btn_start_game")
const btnLevel = document.getElementById("levelup")
const gameContainer = document.getElementById("boxgame")


btnSubmit.addEventListener("click", function() {
    const livelliDifficolta = btnLevel.value
    const numeroTotaleCelleDaAggiungere = numerocelle(livelliDifficolta)
     
    gameContainer.innerHTML = "";
    const numeroColonne = Math.sqrt(numeroTotaleCelleDaAggiungere)
    console.log(numeroColonne)

    for (let x = 0; x < numeroTotaleCelleDaAggiungere; x++) {
        // const element = numeroTotaleCelleDaAggiungere[x];
        const cella = document.createElement("div")
        cella.classList.add("cel-box-"+ Math.round(numeroColonne))
        gameContainer.append(cella)

       
        
     
        
    }
    
    console.log(livelliDifficolta)
})

// aprò una funzione per modellare a modo mio il numero delle celle
function numerocelle(livelliDifficolta) {
    let risultato

    if (livelliDifficolta === "easy") {
        risultato = 100  
    }

    else if (livelliDifficolta === "medium"){
        risultato=81
    }
    else(
        risultato=49
    )

    return risultato
    
}


// in base al alla variabile numerototale di celle io andrò a creare un tot di quadrati
function innestoindom() {
    
    
    
}