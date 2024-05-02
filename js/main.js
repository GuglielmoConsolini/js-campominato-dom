// dichiaro variabile per il pulsante di inizio gioco
let pulsante = document.querySelector("button")

// codice per impedire la creazione di altre griglie(mi sono aiutato con la documentazione su internet)
let giocoAvviato = false

// click per iniziare il gioco
pulsante.addEventListener("click",function(){
    if(!giocoAvviato){
        avviaGioco()
        giocoAvviato = true
    } 
})



// funzione di inizio gioco + modaltà hard, medium , easy
function avviaGioco(){

    let grid = document.getElementById("griglia");

    // dichiaro come variabile la mia select , e ne dichiaro un altra che è uguale al suo Value
    let selectDifficolta = document.getElementById("difficolta");
    let difficoltàSelezionata = selectDifficolta.value;
    
    // if per gestire se il value è hard , in questo caso il ciclo stampa solo i quadrati necessari e rimuove le classi inutili
    if(difficoltàSelezionata === "hard"){

        grid.classList.remove("griglia-medium" , "griglia-easy")
        for (let i = 1 ; i <= 49 ; i++){
        let cella = creaQuadrato(i);
        cella.classList.add("square");
        clickQuadrato(cella,i)
        grid.append(cella);
        }
    // stessa cosa per value medium
    } else if(difficoltàSelezionata === "medium") { 

    grid.classList.remove("griglia-hard" , "griglia-easy")
    for ( let i = 1 ; i <= 81 ; i++ ) {
        let cella = creaQuadrato(i);
        cella.classList.add("square");
        clickQuadrato(cella,i)
        grid.append(cella);
    }
    // uguale anche per value facile
    } else if(difficoltàSelezionata === "easy"){

        grid.classList.remove("griglia-hard" , "griglia-medium")
        for ( let i = 1 ; i <= 100 ; i++ ) {
        let cella = creaQuadrato(i);
        cella.classList.add("square");
        clickQuadrato(cella,i)
        grid.append(cella);
    }
}
}

// funzione per generare numeri casuali
function generaNumeri(min,max){

  Math.floor(Math.random() * (max - min) + min);

}

// funzione per creare i quadrati nel virtual DOM
function creaQuadrato(x){

    let quadrato = document.createElement("div");
    quadrato.classList.add("square");
    console.log(quadrato,x)
    return quadrato;
}
// funzione per gestire i click sui quadrati
function clickQuadrato(quadrato,x){
quadrato.addEventListener("click" , function(){
     
    quadrato.classList.toggle("evidenziato")

    if (quadrato.innerHTML === '') {
        quadrato.innerHTML = x;
    } else {
        quadrato.innerHTML = '';
    }
    console.log(quadrato , x )
})
}








