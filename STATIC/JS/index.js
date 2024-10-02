function percentuale(valore, totale = 7) {
  return (valore / totale) * 100;
}

function sanatize(string) {
  return string.toLowerCase().trim();
}

let nome;

do {
  nome = prompt("Inserisci il tuo nome:");
} while (nome === null || nome.trim() === "");

//variabile che mantiene il punteggio
let punti = 0;

//prima domanda
let d1;
do {
  d1 = prompt("Qual è la capitale del Brasile?");
} while (d1 === null || d1.trim() === "");
d1 = sanatize(d1);
if (d1 === "brasilia") punti++;
else alert("errato, la risposta giusta è Brasilia");

//seconda domanda
let d2;
do {
  d2 = prompt("Chi ha scritto la Divina Commedia?");
} while (d2 === null || d2.trim() === "");
d2 = d2.toLowerCase().trim();
if (d2 === "dante") punti++;
else alert("errato, la risposta giusta è Dante");

//terza domanda
let d3;
do {
  d3 = prompt("Quanti giorni ci sono in un anno?");
} while (d3 === null || d3.trim() === "");
d3 = d3.toLowerCase().trim();
if (d3 === "365") punti++;
else alert("errato, la risposta giusta è 365");

//quarta domanda
let d4;
do {
  d4 = prompt("Come si dice ciao in inglese");
} while (d4 === null || d4.trim() === "");
d4 = d4.toLowerCase().trim();
if (d4 === "hello") punti++;
else alert("errato, la risposta giusta è Hello");

//quinta domanda
let d5;
do {
  d5 = prompt("Qual è il continente più grande del mondo?");
} while (d5 === null || d5.trim() === "");
d5 = d5.toLowerCase().trim();
if (d5 === "russia") punti++;
else alert("errato, la risposta giusta è Russia");

//sesta domanda
let d6;
do {
  d6 = prompt("Quanti secondi ci sono in un minuto?");
} while (d6 === null || d6.trim() === "");
d6 = d6.toLowerCase().trim();
if (d6 === "60") punti++;
else alert("errato, la risposta giusta è 60");

//settima domanda
let d7;
do {
  d7 = prompt("Qual è il mese più corto dell anno?");
} while (d7 === null || d7.trim() === "");
d7 = d7.toLowerCase().trim();
if (d7 === "febbraio") punti++;
else alert("errato, la risposta giusta è Febbraio");

//stampa punteggio finale
alert("il tuo punteggio finale: " + punti);

console.log("percentuale risposte giuste: " + percentuale);
