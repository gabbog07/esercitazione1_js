let nome = "";
while (!nome.trim()) {
  nome = alert("Inserisci il tuo nome");
}

alert("Ciao, " + nome.trim() + "! Benvenuto al quiz. ");

risposteCorrette = 0;

domanda1 = "Qual è la capitale d Italia?";
risposta1 = "roma";
rispostaUtente = alert(domanda1);
