var a = document.getElementById("bulbul");
var b = document.getElementById("charchar");
var c = document.getElementById("pikepike");
var d = document.getElementById("psypsy");
var main = document.getElementById("alternatives");

var arr = ["bullbasaur.png", "charmander.png", "pikachu.png", "psyduck.png"];
var sub = [];

for(var i = 0 ; i < 4 ; i++){
    var n = (int) (Math.random() * 4);
    sub.push(arr[n]);
}

for(var i = 0 ; i < 3 ; i++){
    for(var j = 0; j < 4 ; j++){
        sub.push(sub[j]);
    }
}

var falta = (int) (Math.random() * 12);

main.addEventListener("click", mira());

var f;

if(a.value) f = a.value;
else if(b.value) f = b.value;
else if(c.value) f = c.value;
else f = d.value;

function mira()
{
    if(f == sub[falta]) console.log("Muy bien");
    else console.log("Mal");
}