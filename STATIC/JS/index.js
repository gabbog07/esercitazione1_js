// Qui scriviamo il codice JS

// let è una parola chiave che serve a dichiarare delle variabili in JS
let firstName = prompt("Qual è il tuo nome?")


if(firstName === null){

}

// prompt è una funzione che chiede un input all'utente e funziona in maniera del tutto simile a python:
// - restituisce un valore -> posso fare una assegnazione
// - di default restituisce una string

// console.log() logga in console il messaggio passato come argomento; non è bloccante
console.log("Benvenuto " + firstName)

/*

let myVar = 0
myVar = myVar + 1
oppure
myVar++
*/

/*
    Chiediamo un nome all'utente+
        - Se l'utente non insersce il nome continuiamo a chiederlo finchè non inserisce il nome
   
    Facciamo 7 domande all'utente:
    - A ciascuna domanda l'utente può rispondere con una parola
    - Prendere in input la risposta dell'utente
    - fare un sanitize di base della risposta utente
    - controllare se la risposta è quella giusta
    - in caso affermativo incrementare il numero di risposte corrette
    - in caso negativo mostrare la risposta corretta all'utente

    Al termine delle sette domande mostrare con console.log la percentuale di risposte esatte
*/
