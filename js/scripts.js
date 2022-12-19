console.log('int ok');

let distanzaKm = prompt('Inserisci i chilometri da percorrere a numero. Es. 50');
distanzaKm = parseInt(distanzaKm);
console.log(typeof distanzaKm);
console.log("I chilometri inseriti dall'utente sono:",distanzaKm);

const prezzoKm = 0.21;

let prezzoBiglietto = distanzaKm * prezzoKm;
prezzoBiglietto = parseInt(prezzoBiglietto);
console.log(`Prezzo biglietto intero ${prezzoBiglietto} €`)
console.log(typeof prezzoBiglietto);

let etàPasseggero = prompt("Inserisci l'età del passeggero a numero. Es. 18");
etàPasseggero = parseInt(etàPasseggero);
console.log(typeof etàPasseggero);
console.log("L'età del passeggero è:",etàPasseggero);


// let prezzoBigliettointero = distanzaKm * prezzoKm;
// console.log(prezzoBigliettointero)
// console.log(typeof prezzoBigliettointero);

// if (etàPasseggero < 18) {
//     console.log("Il passeggero è minorenne");
//     let prezzoBigliettoMinore = ((prezzoBigliettointero * 20) / 100);
//     console.log((prezzoBigliettointero * 20) / 100);
//     console.log(prezzoBigliettoMinore);
// }
// else if (etàPasseggero >= 65){
//     console.log("Il passeggero è over 65");
//     let prezzoBigliettoOver = ((prezzoBigliettointero * 40) / 100);
//     console.log((prezzoBigliettointero * 40) / 100);
//     console.log(prezzoBigliettoOver);
// }


if (etàPasseggero < 18) {
    console.log("Il passeggero è minorenne");
    prezzoBiglietto = (prezzoBiglietto -((prezzoBiglietto / 100) * 20));

    console.log(prezzoBiglietto);
    alert(`Il prezzo del biglietto ridotto del 20% è di ${prezzoBiglietto} €`)
}
else if (etàPasseggero >= 65){
    console.log("Il passeggero è over 65");
    prezzoBiglietto = (prezzoBiglietto -((prezzoBiglietto / 100) * 40));

    console.log(prezzoBiglietto);
    alert(`Il prezzo del biglietto ridotto del 40% è di ${prezzoBiglietto} €`)
}
else {
    prezzoBiglietto = prezzoBiglietto
    alert(`Il prezzo del biglietto è di ${prezzoBiglietto} €`)
}