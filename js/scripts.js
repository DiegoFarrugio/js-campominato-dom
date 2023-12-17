/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.*/

/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.*/


const myButton = document.getElementById('myButton');  //Creo costante per il bottone che genererà i 3 livelli
const diffSelect = document.getElementById('difficulty'); //Creo costante per i 3 livelli di difficoltà
const containerGrid = document.querySelector ('.container-grid')  //Creo costante che mi seleziona il container grid dell'Html
let points = 0;
myButton.addEventListener('click', function(){ //Significa "generami tutto quello che c'è dentro le par graffe dopo che clicco il bottone"


    const cellNumber = parseInt(diffSelect.value); //Creo questa costante che si va a collegare alla costante difficoltà che mi servirà dentro l'if e metto value per prendere il valore dell'elemento.
    //const cellNumber = 100; Si può a che fare così, è lo stesso.
    

    //Creo un array di 16 numeri casuali tutti diversi
    const bombs = [];
    while(bombs.length < 16){ //Così facendo con il while le mie bombe si feremerano a 16 anche se ci sono tanti numeri doppioni
        const newRandomNumber = getRandomNumber (1, cellNumber);
        console.log('newRandomNumber', newRandomNumber, typeof newRandomNumber);

        //Aggiungo il numero nell' array se non è già presente all'interno di esso 
        if(bombs.includes(newRandomNumber) == false){ //Inlcudes mi verifica se newRandomNumber è presente nell'array bombs.
        bombs.push(newRandomNumber);
        }
        else{
            console.log('duplicato');
        }
    }

    console.log('bombs', bombs, typeof bombs);


    containerGrid.innerHTML = ''; //Inserendo questo pezzo di codice vuol dire che ogni volta che clicco sul bottone viene cancellato tutto e il gioco parte da capo



    for(let i = 1; i <= cellNumber; i++){  //Inserisco cellNumber perchè all'interno di questa costante è inserito il valore di diffSelect
        const cell = document.createElement ('div'); //Così facendo creo i DIV e al momento mi fa vedere solo i numeri in pagina
        cell.classList.add('cell'); //Aggiungo la classe cell richiamandola dal CSS così da dare lo stile
        cell.innerHTML = i; //Aggiungo questo per scrivere il numero all'interno di ogni cella
    
        //Mi creo IF ed ELSE IF in modo da dire che in base al livello mi cambia il numero delle celle e in quante righe devono essere disposte. (Calcoli fatti con CSS).

        if (cellNumber == 100){
            cell.classList.add('cell-100');
        }
        else if (cellNumber == 81){
            cell.classList.add('cell-81');
        }
        else if (cellNumber == 49){
            cell.classList.add('cell-49');
        }
    
    
        cell.addEventListener('click', function(){ //Adesso creo un evento che al click sulla CELLA mi generi: 
            const allClickedBombs = document.querySelectorAll('.cell.bomb');
            cell.classList.toggle('click-active'); //Toggle serve per selezionare e deselezionare col click un elemento. Con 'click-active' richiamo il CSS per dare stile.
            console.log(this); //This è l'elemento che ha subito l'evento (in questo caso qui dentro)... Con questo spariamo in console il numero con l'elemento DIV che lo contiene
            console.log(cell.innerHTML); //Con questo spariamo in console come contenuto testuale (1,5,89) tutti i numeri che l'utente seleziona

            const numberInCell = parseInt(this.innerText);

            if(allClickedBombs.length == 0){
                console.log('this', this);

                const numberInCell = parseInt(this.innerText);
                console.log('numberInCell', numberInCell);

                const allClickedCells = document.querySelectorAll('.cell.clicked');
                console.log('Celle cliccate', allClickedCells.length, typeof allClickedCells);

                if(bombs.includes(numberInCell) == false){
                    if (this.classList.add('clicked')){ //
                        this.classList.add('clicked');
                        points++;
                    }
               }
                else{
                    this.classList.add('bomb');
                    alert('Hai perso! Hai totalizzato ' + allClickedCells.length + 'punti')
                }
            }

        })  

        containerGrid.append(cell); //Con l'append inserisco le celle dentro il containterGrid
    }
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }















/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/




/*const containerGrid = document.querySelector('.container-grid'); 

const myButton = document.getElementById('myButton');

const diffSelect = document.getElementById('difficulty');

myButton.addEventListener('click', function(){

    const cellNumber = parseInt(diffSelect.value);

    containerGrid.innerHTML = '';


    for(let i = 1; i <= cellNumber; i++){
        console.log(i);

        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = i;

        if (cellNumber == 100){
            cell.classList.add('cell-100');
        }
    
        else if (cellNumber == 81){
            cell.classList.add('cell-81');
        }
    
        else if (cellNumber == 49){
            cell.classList.add('cell-49')
        }

        containerGrid.append(cell);

        cell.addEventListener('click', function(){
            cell.classList.toggle('click-active');
            console.log(this);
            console.log(cell.innerHTML);
        })
    }
})*/













