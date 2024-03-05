
console.log("hei");

let hei = "hello";

console.log(hei);

function gjørnoe(melding){
    console.log("hei");
    console.log(melding);
    console.log("hei");
} 

gjørnoe("grei melding");

gjørnoe("2");

let liste = [7, 11, 20, 3, 90, 50];

liste.push(2);

console.log(liste);

if (liste.length > 10) {
    console.log("C:");
} else  if (liste.length < 10 && liste.length > 4) {
    console.log("D:");
} else {
    console.log(":|");
}

console.log(liste[0]);

let teller = 0;

while (teller < liste.length) {
   
    console.log(liste[teller]);
    teller ++ ;
}


for (greie in liste){
    console.log(liste[greie]);

}