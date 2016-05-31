var twojWybor = prompt("Co wybierasz: papier, nożyce czy kamień?").toLowerCase().replace("nozyce", "nożyce").replace("kamien", "kamień");
if (twojWybor === "") {
  confirm("Wprowadź swój wybór :-)");
}
else {
  console.log("Twój wybór: " + twojWybor);
}

var papier = "papier";
var nożyce = "nożyce";
var kamień = "kamień";

var wyborKomputera = Math.random();
if (wyborKomputera < 0.34) {
	wyborKomputera = papier;
} 
else if (wyborKomputera <= 0.67) {
	wyborKomputera = nożyce;
} 
else {
	wyborKomputera = kamień;
}

console.log("Komputer wybrał: " + wyborKomputera);

var compare = function(wybor1, wybor2) {
    if (wybor1 === wybor2) {
        return "Remis!";
    }
    else if (wybor1 === kamień) {
        if (wybor2 === nożyce) { 
            return "Wygrałeś! :-)";
        }
        else { 
            return "Wygrał komputer :-(";
        }
    }
    else if (wybor1 === papier) {
        if (wybor2 === kamień) {
            return "Wygrałeś! :-)";
        }
        else {
            return "Wygrał komputer :-("; 
        }
    }
    else if (wybor1 === nożyce) {
        if (wybor2 === papier) {
            return "Wygrałeś! :-)";
        }
        else {
            return "Wygrał komputer :-("; 
        }
    }
};

console.log(compare(twojWybor, wyborKomputera));