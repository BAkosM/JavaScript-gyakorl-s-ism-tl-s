//1. Feladat
let szamok = [];
for (var i = 0; i < 10; i++) {
    szamok[i] = Math.round(Math.random()*100);
}
for (var i = 1; i < szamok.length; i++){
    for (var j = 0; j < i; j++){
        if (szamok[i] < szamok[j]) {
          var x = szamok[i];
          szamok[i] = szamok[j];
          szamok[j] = x;
        }
    }
}
console.log(szamok);