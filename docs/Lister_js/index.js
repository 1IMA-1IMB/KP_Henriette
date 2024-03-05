let liste_tall = [1, 2, 3, 4, 5];

let liste_tall_kopi = [3, 2, 5, 4, 1];

let liste_ord = ["en", "to", "tre", "fire", "fem"];

let index = 0;






while(index < liste_tall.length){

    console.log(liste_tall)

    index++; //index øker med 1.

}


for(let i = 0; i < liste_ord.length; i++){
    console.log(liste_ord[i]);
}


if(liste_tall == liste_tall_kopi){
    console.log("Yes");
}else{
    console.log("No");

}