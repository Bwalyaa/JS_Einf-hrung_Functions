console.log("%c Good Morning", "background: white; color: red"); // die farbe in der console ändern

// # Comparison - Vergleichen

// - == vergleicht die Werte
// - === vergleicht die Werte und DatenTypen

console.log(3 == "3");
console.log(3 === "3");

console.log(1 == 1);
console.log(1 == 2);
console.log(6 == "7");

// - != nicht gleicher Wert
// - !== nicht gleicher Wert und DatenTyp

console.log(3 != 3);
console.log(3 !== 3);
console.log("3" !== 3);

// - > größer als
// - < kleiner als
// - >= größer als
// - <= kleiner als

console.log(3 > 2);
console.log(4 < 6);

console.log("A" > "B");
console.log("B" > "a");


// # Elemente Selektieren

// - getElementById

const mainHeadline = document.getElementById("main-headline")
console.log(mainHeadline);
console.log(mainHeadline.innerHTML);

// - querySelector()

//du kannst klassen/id's mit getelementById oder mit query selector ansprechen

// - query selector um ein id anzusprechen musst du eine "#" verwenden
const secondaryHeadline = document.querySelector("#secondary-headline")
 console.log(secondaryHeadline);

 // - query selector um eine class anzusprechen musst du ein . verwenden
 const secondaryHeadline2 = document.querySelector(".myHeadline"); 
 console.log(secondaryHeadline2);

 // direkt ein Element ansprechen

 const secondaryHeadline3 = document.querySelector("h2")

 console.log(secondaryHeadline3);
 console.log(secondaryHeadline3.innerHTML);



 // - innerHtml

 mainHeadline.innerHTML = "ich bin der neue, hahahaha"

 secondaryHeadline3.innerHTML = "moin"
 secondaryHeadline3.innerHTML += " Leute" // so kannst du was hinzufügen


 // css funktionen mit javascript verbinden
 mainHeadline.style.color = "red" //so kannst du die farbe deines angesprochenen Element ändern
 mainHeadline.style.border = "1px solid red" // so kannst du in java eine border box erstellen
 mainHeadline.style.backgroundColor = "yellow"

 // * Unterschied zwischen document.write() und .innerHTML

 let divContainer = document.querySelector("#div-container")
 divContainer.innerHTML = "<p> Ich bin ein p tag </p>" // mit inner.HTML kannst du ein tag erstellen mit inhalt, obwohl es das element nicht im index gibt

divContainer.innerHTML += "<p>Ich bin nochmal ein p tag <p>" // mit += kannst du ein ein weiteren ta hinzufügen

document.write ("<p> ich bin ein p tag vom document.write() </p>") // document.write stellt ein element immer ganz ans ende/ ganz nach unten

// # Funktion

function sayHello(){
    console.log("HELLO LEUTE"); // in die geschweifte klammer kannst du alles schreiben was du möchtest
}

sayHello()

function log(firstName, lastName){
    console.log("hello du bist eingeloge" + firstName + lastName); // funktion mit parameter
}

log("Magda", "Cale")

function addMe (num1, num2){
    console.log(num1 * num2);
}

addMe(3, 5)

let num5 = 5;
let num6 = 10;

function plusMe(number1, number2){ //kannst in der klammer schreiben was du möchtest
    divContainer.innerHTML += "<p>" + number1 + number2 + "</p>"
}

plusMe(10, 5)