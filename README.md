# js-campominato-dom

M1

1 Mi creo una funzione base per generare dei numeri casuali

2 implemento questa mini funzione in un altra più grande che avrà lo scopo di generare le bombe per un totale di 16 volte(attraverso un ciclo while?) inoltre dentro questa funzione dichiarerò il mio array di bombe e farò in modo che non vengano generate bombe con numeri uguali.

3 Mi assicuro attraverso un console log che vengano effettivamente create

M2 

1 Mi creo una classe in css da aggiungere alle celle con la bomba quando vengono cliccate

2 inseristo dentro la funzione che gestisce il click dei quadrati un if che aggiungerà la classe alla cella cliccata, a patto che il suo valore sia contenuto nell'array creato con la funzione generaBombe.

3 Per far si che il tutto funzioni devo richiamare la funzione generaBombe all'interno della funzione avviaGioco , facendo in questo modo l'applicazione non funziona(immagino per un problema di scope) e ho dovuto dichiararla nello scope globale

M3

1 Dichiaro la variabile punteggio = 0 nello scope globale e la richiamo dentro la funzione avviaGioco

2 Nell'if dentro la funzione clickQuadrato specifico che se viene cliccata una cella con valore contenuto nell'array al punteggio verranno sottratti 5 punti invece di far finire subito la partita , e in un "else if" un contatore che aggiunge 1 punto al click di una cella sicura.

3 In un altro "if" specifico che se il punteggio è minore di 0 l'utente riceverà un "alert" con il messaggio : "HAI PERSO"
