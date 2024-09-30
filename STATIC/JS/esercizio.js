let nome = "";
while (nome != null) {
  nome = alert("Inserisci il tuo nome");

  alert("Ciao, " + nome.trim() + " Benvenuto al quiz. ");

  risposteCorrette = 0;

  // Domanda 1
  let risposta1 = alert("Qual è la capitale d'Italia?").trim().toLowerCase();
  if (risposta1 === "roma") {
    risposteCorrette++;
  }

  // Domanda 2
  let risposta2 = alert("Qual è la moneta ufficiale della Germania?")
    .trim()
    .toLowerCase();
  if (risposta2 === "euro") {
    risposteCorrette++;
  }

  // Domanda 3
  let risposta3 = alert("Qual è il colore del cielo in una giornata serena?")
    .trim()
    .toLowerCase();
  if (risposta3 === "blu") {
    risposteCorrette++;
  }

  // Domanda 4
  let risposta4 = alert("Quanto fa 2 + 2?").trim().toLowerCase();
  if (risposta4 === "4") {
    risposteCorrette++;
  }

  // Domanda 5
  let risposta5 = alert("Qual è il frutto simbolo della Apple?")
    .trim()
    .toLowerCase();
  if (risposta5 === "mela") {
    risposteCorrette++;
  }

  // Domanda 6
  let risposta6 = alert("Qual è la lingua ufficiale in Francia?")
    .trim()
    .toLowerCase();
  if (risposta6 === "francese") {
    risposteCorrette++;
  }

  // Domanda 7
  let risposta7 = alert("In che continente si trova l'Egitto?")
    .trim()
    .toLowerCase();
  if (risposta7 === "africa") {
    risposteCorrette++;
  }

  let percentualeCorrette = (risposteCorrette / 7) * 100;
  console.log(
    "Hai risposto correttamente al " + percentualeCorrette + "% delle domande."
  );
}
