var duck = document.getElementById("duck");
var container = document.getElementById("container");
var countduck=0;
var countmis=0;
var richting= ["N","NE", "E","SE", "S","SW", "W", "NW"];
var ducktop = 300;
var duckleft  = 500;
var random;
const total = 20;

duck.onclick = duckClicked;
container.onclick = misClicked;
function duckClicked(event){
    countduck++;
    button1.innerHTML = countduck;
    if(countduck+countmis >= total){
        alert("klaar");
    }

    event.stopPropagation();
}

function misClicked(){
    countmis++;
    button2.innerHTML = countmis;
    if(countduck+countmis >= total){
        alert("klaar");
    }
}

function fly(){ 
    random= richting[Math.floor(Math.random()*richting.length)];
    console.log(random);
    switch(random){
        case "N":
            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;

        case "NE":
            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;

        case "E":
            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";
            break;

        case "SE":
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;

        case "S":

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;

        case "SW":
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";
            break;

        case "SW":
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;

        case "NW":
            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop + 75;
            duck.style.top = ducktop + "px";
            break;
    }

}

function Event(){
    setInterval(fly, 500);
}
Event();
