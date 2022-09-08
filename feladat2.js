//2.Feladat
let macskak = [];
for (var i = 0; i < 20; i++) {
let macska = {
    Nev: "Cirmos "+(i+1),
    Eletkor: Math.round((Math.random()*10)+2,0),
}
macskak[i] = macska;
}
console.log(macskak);
for (var i = 0; i <macskak.length; i++){
    if (macskak[i].Eletkor == 2){
        console.log(macskak[i]);
    }
}