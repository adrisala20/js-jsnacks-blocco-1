/* 
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
*/
/* inserisco le variabili */
let fruttaInFrigo = [
   'banana',
   'mela',
   'pera',
   'ciliegia',
   'arancia',
   'mandarino',
   'cocomero',
   'limone',
   'fragola'
];
console.log(fruttaInFrigo);

const output = document.getElementById('risultato');

fruttaInFrigo.push('pesca');
let check = false ;

for (let i = 0; i <fruttaInFrigo.length ; i++){
   
   let cerca = 'cocomero';

   if(cerca === fruttaInFrigo[i]) {
      check = true;
   }
}
if (check) {
   output.innerHTML = 'trovato! Devo solo preparare il cocktail';
} else {
   output.innerHTML = 'oh no, devo uscire a compare il cocomero!';
}