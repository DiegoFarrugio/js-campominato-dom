/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.*/

function generateRandoNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const myButton = document.getElementById('myButton');
const diffSelect = document.getElementById('difficulty');
const containerGrid = document.querySelector ('.container-grid')  //Mi seleziono il container grid dell'Html


/*while (randomNumbers.length <= 16){
    
    const singleNumber = generateRandoNumber(1, 16);
    console.log(singleNumber);

    let foundInArray = randomNumbers.includes(singleNumber);

    if(foundInArray == false){
        randomNumbers.push(singleNumber);
    }
    else{
        console.log('numero già inserito');
    }

}*/


myButton.addEventListener('click', function(){
    const randomNumbers = [];
    const difficulty = parseInt(diffSelect.value);

    for(let x = 1; x <= 16; x++){
        let singleNumber = generateRandoNumber(1, difficulty);
        console.log(singleNumber);

        while(randomNumbers.includes(singleNumber)) {
            singleNumber = generateRandoNumber(1, difficulty);
        }

        randomNumbers.push(singleNumber);
    }

    const cellNumber = parseInt(diffSelect.value);

    containerGrid.innerHTML = '';



    for(let i = 1; i <= cellNumber; i++){ 
        const cell = document.createElement ('div'); //Così facendo creo i DIV e al momento mi fa vedere solo i numeri in pagina
        cell.classList.add('cell'); //Aggiungo la classe cell richiamandola dal CSS così da dare lo stile
        cell.innerHTML = i; //Aggiungo questo per scrivere il numero all'interno di ogni cella
    
        if (cellNumber == 100){
            cell.classList.add('cell-100');
        }
        else if (cellNumber == 81){
            cell.classList.add('cell-81');
        }
        else if (cellNumber == 49){
            cell.classList.add('cell-49');
        }

        containerGrid.append(cell); //Dopo aver fatto tutto inserisco le celle dentro il containterGrid con l'append
    
    
        cell.addEventListener('click', function(){ //Creo un evento che al click della CELLA mi generi: 
            cell.classList.toggle('click-active'); //Toggle serve per selezionare e deselezionare col click un elemento. Con classlist e poi'click-active' richiamo il CSS per dare stile.
            console.log(this); 
            console.log(cell.innerHTML); //Con questo spariamo in console tutti i numeri che l'utente seleziona
        })  
    } 

})