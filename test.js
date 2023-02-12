"use strict"
const anzahlFehlerProBuchstabe = {
    a: ["a", 0, 0], b: ["b", 1, 0], c: ["c", 0, 0], d: ["d", 5, 0], e: ["e", 0, 0], f: ["f", 0, 0],
    g: ["g", 0, 0], h: ["h", 0, 0], i: ["i", 0, 0],
    j: ["j", 0, 0], k: ["k", 0, 0], l: ["l", 78, 0], m: ["m", 0, 0], n: ["n", 0, 0], o: ["o", 0, 0],
    p: ["p", 0, 0], q: ["q", 11, 0], r: ["r", 0, 0],
    s: ["s", 0, 0], t: ["t", 6, 0], u: ["u", 5, 0], v: ["v", 11, 0], w: ["w", 0, 0], x: ["x", 0, 0],
    y: ["z", 0, 0], z: ["y", 0, 0], _: [" ", 0, 0]
}



function fehlerAuswertung() {
    let platz1 = ["", 0, 0]
    let platz2 = ["", 0, 0]
    let platz3 = ["", 0, 0]
    let platz4 = ["", 0, 0]
    let platz5 = ["", 0, 0]
    for (const buchstabe in anzahlFehlerProBuchstabe) {
        let akBuchstabe = anzahlFehlerProBuchstabe[buchstabe][1]
        if (akBuchstabe >= platz1[1]) {

            platz1 = anzahlFehlerProBuchstabe[buchstabe]
        } 
    }

    for (const buchstabe in anzahlFehlerProBuchstabe) {
        let akBuchstabe = anzahlFehlerProBuchstabe[buchstabe][1]
        if (akBuchstabe >= platz2[1] && akBuchstabe <= platz1[1] && 
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz1[0]) {

                platz2 = anzahlFehlerProBuchstabe[buchstabe]
        }
    }

    for (const buchstabe in anzahlFehlerProBuchstabe) {
        let akBuchstabe = anzahlFehlerProBuchstabe[buchstabe][1]
        if (akBuchstabe >= platz3[1] && akBuchstabe <= platz2[1] && 
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz2[0] && 
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz1[0]) {

            platz3 = anzahlFehlerProBuchstabe[buchstabe]
        }
    }

    for (const buchstabe in anzahlFehlerProBuchstabe) {
        let akBuchstabe = anzahlFehlerProBuchstabe[buchstabe][1]
        if (akBuchstabe >= platz4[1] && akBuchstabe <= platz3[1] && 
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz3[0] && 
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz2[0] &&
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz1[0] ) {

            platz4 = anzahlFehlerProBuchstabe[buchstabe]

        }
    }

    for (const buchstabe in anzahlFehlerProBuchstabe) {
        let akBuchstabe = anzahlFehlerProBuchstabe[buchstabe][1]
        if (akBuchstabe >= platz5[1] && akBuchstabe <= platz4[1] && 
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz4[0] && 
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz3[0] &&
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz2[0] &&
            anzahlFehlerProBuchstabe[buchstabe][0] !== platz1[0]) {

            platz5 = anzahlFehlerProBuchstabe[buchstabe]
        }
    }
    
    return [platz1, platz2, platz3, platz4, platz5]
}
fehlerAuswertung()
console.log(fehlerAuswertung())

function objektAufNullSetzen(){
    for(const element in anzahlFehlerProBuchstabe){
        console.log(anzahlFehlerProBuchstabe[element][1], "hh")
        anzahlFehlerProBuchstabe[element][1] = 0
        anzahlFehlerProBuchstabe[element][2] = 0

    }
}
objektAufNullSetzen()
console.log(anzahlFehlerProBuchstabe)