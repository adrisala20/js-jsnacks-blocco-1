/* 

Creiamo un array chiedendo all'utente quanti elementi dovrà contenere
 e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

*/
/* dichiaro le variabili */

let sceltaUtente = document.getElementById('sceltaUtente');


let bottone = document.querySelector('.btn');
let nuovoArray = [];

bottone.addEventListener('click', function(){

    let numeriElementi = sceltaUtente.value;
    //creo un numero random per il numero scelto dall'utente
    for(i = 0; i < numeriElementi ; i++){
    let numeriRandom= getRndInteger(0, 100);
      //console.log(numeriRandom)
    nuovoArray += numeriRandom; 
    }
    console.log(nuovoArray);
})
