const section = document.querySelector("section");
const teller = document.querySelector("#teller");
const oppgaveSection = document.querySelector("#oppgaveSection");
const spm = document.querySelector(".spm");


sporsmalListe = [
    {
        question: "Hva heter Norges høyeste fjell?",
        svarA:  {tekst: "Galdhøpiggen", riktig: true},
        svarB: {tekst: "K2", riktig: false},
        svarC: {tekst: "Gaustadtoppen", riktig: false},
        svarD: {tekst: "Sandfloegga", riktig: false} 
    },
    {
        question: "Hva er Norges største fisk?",
        svarA:  {tekst: "Karpe", riktig: false},
        svarB: {tekst: "Torsk", riktig: false},
        svarC: {tekst: "Håkjerring", riktig: true},
        svarD: {tekst: "Mulle", riktig: false} 
    },
    {
        question: "Norges mest brukte jentenavn i 2018?",
        svarA:  {tekst: "Nora/Norah", riktig: false},
        svarB: {tekst: "Emma", riktig: true},
        svarC: {tekst: "Olivia", riktig: false},
        svarD: {tekst: "Sofie", riktig: false} 
    },
    {
        question: "Hvilket selskap er Norges største?",
        svarA:  {tekst: "Telenor", riktig: false},
        svarB: {tekst: "DNB", riktig: false},
        svarC: {tekst: "Orkla", riktig: false},
        svarD: {tekst: "Equinor", riktig: true} 
    },
    {
        question: "Norges mest brukte guttenavn i 2018?",
        svarA:  {tekst: "Lucas/lukas", riktig: true},
        svarB: {tekst: "Emil", riktig: false},
        svarC: {tekst: "Oskar/Oscar", riktig: false},
        svarD: {tekst: "Henrik", riktig: false} 
    },
    {
        question: "Hvilket land grenser IKKE til Norge?",
        svarA:  {tekst: "Russland", riktig: false},
        svarB: {tekst: "Sverige", riktig: false},
        svarC: {tekst: "Danmark", riktig: true},
        svarD: {tekst: "Finland", riktig: false} 
    },
    {
        question: "I hviket år arrangerte Norge OL?",
        svarA:  {tekst: "1985", riktig: false},
        svarB: {tekst: "1994", riktig: true},
        svarC: {tekst: "1996", riktig: false},
        svarD: {tekst: "1989", riktig: false} 
    },
    {
        question: "Hvilket år kom Norge ut av union med Sverige?",
        svarA:  {tekst: "1814", riktig: false},
        svarB: {tekst: "1905", riktig: true},
        svarC: {tekst: "1816", riktig: false},
        svarD: {tekst: "1850", riktig: false} 
    },
    {
        question: "Hva het Norges første konge?",
        svarA:  {tekst: "Harald Hårfagre", riktig: true},
        svarB: {tekst: "Olav I Tryggvason", riktig: false},
        svarC: {tekst: "Olav den hellige", riktig: false},
        svarD: {tekst: "Håkon I den gode", riktig: false} 
    },
    {
        question: "Hva heter Norges Fiskeriminister?",
        svarA:  {tekst: "Harald Nesvik", riktig: true},
        svarB: {tekst: "Per Sandberg", riktig: false},
        svarC: {tekst: "Abid Raja", riktig: false},
        svarD: {tekst: "Kjell Ropstad", riktig: false} 
    }
]

//Teller poeng
let p = 0;

let i = 0;

//Random nmbr generator
/*
function random() {
    const randomNmbr = Math.floor(Math.random()*2) == 1 ? 1 : -1;
}

*/

function quiz() {
    const oppgave = sporsmalListe[i];

    const randomNmbrA = Math.floor(Math.random() * 24) - 12;
    const randomNmbrB = Math.floor(Math.random() * 24) - 12;
    const randomNmbrC = Math.floor(Math.random() * 24) - 12;
    const randomNmbrD = Math.floor(Math.random() * 24) - 12;
    const randomNmbrQ = Math.floor(Math.random() * 12) - 6;

    oppgaveSection.innerHTML = `
    <h2 style="transform: rotate(${randomNmbrQ}deg)">${oppgave.question}</h2>
    <div id="valg">
        <div style="transform: rotate(${randomNmbrA}deg)" data-riktig="${oppgave.svarA.riktig}" class="spm">
            <h2>${oppgave.svarA.tekst}</h2>
        </div>
        <div style="transform: rotate(${randomNmbrB}deg)" data-riktig="${oppgave.svarB.riktig}" class="spm">
            <h2>${oppgave.svarB.tekst}</h2>
        </div>
        <div style="transform: rotate(${randomNmbrC}deg)" data-riktig="${oppgave.svarC.riktig}" class="spm">
            <h2>${oppgave.svarC.tekst}</h2>
        </div>
        <div style="transform: rotate(${randomNmbrD}deg)" data-riktig="${oppgave.svarD.riktig}" class="spm">
            <h2>${oppgave.svarD.tekst}</h2>
        </div>
    </div>
    `
}


quiz();

function nyRunde() {
    if(i < sporsmalListe.length) {  
        quiz();
        lagKnapper();
     } else  {
         endGame();
     }
     
}

function sjekkSvar(evt) {    
    const knappen = evt.target;  
    console.log(knappen);  
    const riktigSvar = knappen.dataset.riktig;
    
    if(riktigSvar === "true") {
        knappen.classList.add("riktig");
        p++;
        teller.innerText = p;
    } else {
        knappen.classList.add("feil");
    }
    
    i++;
    
    setTimeout(nyRunde, 200);   
}

function lagKnapper() {
    const knapper = document.querySelectorAll(".spm");
    for(const knapp of knapper) {
        knapp.addEventListener("click", sjekkSvar);
    }
}

function endGame() {
    if (p >= 6) {
        oppgaveSection.innerHTML = `
    <h2>Du er ferdig og scoret ${p} poeng! Gratulerer! Vil du prøve igjen?</h2>
    <a href="index.html" class="btn">Vil du prøve på nytt?</a>`
    } else if (p <= 5) {
        oppgaveSection.innerHTML = `
    <h2>Du er ferdig og scoret ${p} poeng! Vil du prøve igjen?</h2>
    <a href="index.html" class="btn">Vil du prøve på nytt?</a>`
    }
}

lagKnapper();



