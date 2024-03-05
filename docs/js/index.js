let sauer = 100;
console.log(sauer);

//oppgave a
function TellEnSau(){
    sauer = sauer - 1;
    console.log(sauer);


}

TellEnSau();

//oppgave b og d
function Tellnoensauer(flokk){
    sauer -= flokk;
    if(sauer <= 0){
        console.log("Zzz");
    }
    else{
        console.log("du har " + sauer + " sauer igjen å telle før du sovner ");

    }

}

Tellnoensauer(20);

//oppgave c
function mistetTellingen(){
    sauer = 100;
    console.log(sauer);

}

mistetTellingen();

function klippSauer(){
    
}