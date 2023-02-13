//"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const anzahlFehlerProBuchstabe = {
        a: ["a", 0, 0], b: ["b", 0, 0], c: ["c", 0, 0],
        d: ["d", 0, 0], e: ["e", 0, 0], f: ["f", 0, 0],
        g: ["g", 0, 0], h: ["h", 0, 0], i: ["i", 0, 0],
        j: ["j", 0, 0], k: ["k", 0, 0], l: ["l", 0, 0],
        m: ["m", 0, 0], n: ["n", 0, 0], o: ["o", 0, 0],
        p: ["p", 0, 0], q: ["q", 0, 0], r: ["r", 0, 0],
        s: ["s", 0, 0], t: ["t", 0, 0], u: ["u", 0, 0],
        v: ["v", 0, 0], w: ["w", 0, 0], x: ["x", 0, 0],
        y: ["z", 0, 0], z: ["y", 0, 0], _: [" ", 0, 0],
        z0: ["0", 0, 0], z1: ["1", 0, 0], z2: ["2", 0, 0], 
        z3: ["3", 0, 0], z4: ["4", 0, 0], z5: ["5", 0, 0], 
        z6: ["6", 0, 0], z7: ["7", 0, 0], z8: ["8", 0, 0], 
        z9: ["9", 0, 0],
        s1: ["'", 0, 0], s2: ["-", 0, 0], s3: ["]", 0, 0], 
        s4: ["^", 0, 0], s5: ["[", 0, 0], s6: ["?", 0, 0], 
        s7: ["=", 0, 0], s8: ["#", 0, 0], s9: ["!", 0, 0], 
        s10: ["§", 0, 0], s11: ["@", 0, 0], s12: ["_", 0, 0], 
        s13: [">", 0, 0], s14: [")", 0, 0], s15: ["|", 0, 0], 
        s16: ["+", 0, 0], s17: ["/", 0, 0], s18: ["$", 0, 0], 
        s19: ["*", 0, 0], s20: ["%", 0, 0], s21: ["&", 0, 0], 
        s22: [")", 0, 0], s23: ["<", 0, 0], s24: ["\\", 0, 0],
        s25: ["`", 0, 0], s26: ["\"", 0, 0], s27: ["€", 0, 0], 
        s28: [".", 0, 0], s29: [",", 0, 0], s30: [":", 0, 0], 
        s31: [";", 0, 0], s32: ["}", 0, 0], s33: ["{", 0, 0], 

    }

    // Tasten Anzeige
    const taste1 = document.querySelector(".tasta_taste-1")
    const taste2 = document.querySelector(".tasta_taste-2")
    const taste3 = document.querySelector(".tasta_taste-3")
    const taste4 = document.querySelector(".tasta_taste-4")
    const taste5 = document.querySelector(".tasta_taste-5")
    const tasteGelb = document.querySelector(".tasta_taste-gelb")
    const tasteRot = document.querySelector(".tasta_taste-rot")
    const tasteBlau = document.querySelector(".tasta_taste-blau")
    const taste9 = document.querySelector(".tasta_taste-9")
    const taste10 = document.querySelector(".tasta_taste-10")
    // const colorGreen = "green"
    // const colorWhite = "whitesmoke"
    // const colorRed = "red"
    // const colorYellow = "yellow"
    const colorBlue = "blue"
    const colorDarkblue = "darkblue"

    // Timer
    const buttonStartTimer = document.querySelector(".menue_startButton")
    const menueTimer = document.querySelector(".menue_timer")
    const auswahlTime = document.querySelector(".menue_zeitAuswahl")
    let userTime = 60
    let timer;
    let timerGestartet = false

    // Textauswahl
    const menueTextAuswahl = document.querySelector(".menue_textAuswahl")
    const texte = new Map([
        ["Text1", "Eines Tages, als roten Blätter von den Bäumen flatterten, brach Nokome allein mit seinem Kanu auf. Er überquert das Stück Meer, das Uktamkoo vom Festland trennt, und fuhr in die Mündung des Flusses ein. Er folgte dem Fluss bis zu seiner Quelle, einem See im Süd-Gebirge. Nachdem er auch diesen See überquert hatte, nahm er sein Kanu auf den Rücken und trug es zu einem zweiten See, den er auch überquerte, und so gelangte er von See zu See bis zu einem Bach, der direkt ins Minas-Becken hinabführt. Fern, über der Bucht, sah er nun Blomidon, purpurrot in der Ferne. Es war noch eine lange und beschwerliche Reise über die Bucht, bis endlich sein Kanu knirschend auf den Strand von Blomidon auffuhr und er zu den roten Sandsteinklippen hinaufblickte. Er spürte plötzlich, dass Gluskap hier irgendwo in der Nähe sein musste. Er würde auf die Berge steigen, und dann konnte er die Gegend ringsum überschauen. So würde er entdecken, wo Gluskaps Hütte stand. Nokome begann zu klettern. Der rote Stein war nass, und immer wieder rutschte er ab. Zwergkiefern zerkratzten ihm das Gesicht, und er schürfte sich die Hände auf, aber er mühte sich weiter. Höher und höher stieg er, bis er die Spitze erreicht hatte. Müde und schmutzig und keuchend stürzte er ins Gras."],
        ["Text2", "byt byt byt byt byt, Berater, Baum, Blume, Beruf, Blei, Boden, Beileid, Bulle, Buero, bestaunen, Betrag, beladen, Boote, Bote, Brot, Betreiber, betreiben, Betrag, Beleidigung, Byzanz, Bypass, Bye-bye, Baby, Yeti, Yoga, Yes, Ypsilon, Ytong, Tiefe, Tanne, Totem, Tasse, Teer, Taste, Teller, Tante, Torte, Trottel, Torf, Tinte, Tor, Tollwut, Tierfell, qhx  qhx qhx qhx qhx qhx cjv cjv cjv cjv cjv Creme, Centimeter, Camel, Lack, Rock, Bock, Zicke, Ecke, Junge, Jod, Jagt, Jade, Joeger, Jedermanns, Jemand, Januar, Jause, Ja, Jens, Jacke, Jeder, Jesus, Verein, Vers, Vase, Vogel, Verbund, Verb, Vater, Vorstand, Voll, Versand, Verband, verlobt, verliebt, vorsetzen, verspaetet, verpassen,"],
        ["Text3", "!\"§$%&/()=?\\+*#'-_.,:;|€@ sein rad flog zum pkw byt cjv qhx äöüß"]])
    let text = "sein rad flog zum pkw byt cjv qhx äöüß"
    let textCounter = 0

    // Textlauf
    let textLaufF = document.querySelector(".text_lauf-f")
    let textLaufM = document.querySelector(".text_lauf-m")
    let textLaufA = document.querySelector(".text_lauf-a")
    textLaufF.innerHTML = text.slice(0, textCounter)
    textLaufM.innerHTML = text[textCounter]
    textLaufA.innerHTML = text.slice(textCounter + 1, 10)

    // anschläge pro min
    let anschlaege = 0
    let anschlaegeProMin = 0
    const menueAnschlagMin = document.querySelector(".menue_anschlaegeMin")
    const auswertungReset = document.querySelector(".auswertung_resetButton")

    // auswertung
    const auswertungAnschlaege = document.querySelector(".span_anschlaege")
    const auswertungAnzeigen = document.querySelector(".auswertung")
    let fehler = 0
    const spanFehlerProzent = document.querySelector(".span_fehlerProzent")
    const spanFehlergesamt = document.querySelector(".span_fehlergesamt")

    const platz1Buchstabe = document.querySelector(".platz1_buchstabe")
    const platz2Buchstabe = document.querySelector(".platz2_buchstabe")
    const platz3Buchstabe = document.querySelector(".platz3_buchstabe")
    const platz4Buchstabe = document.querySelector(".platz4_buchstabe")
    const platz5Buchstabe = document.querySelector(".platz5_buchstabe")

    const platz1Fehler = document.querySelector(".platz1_fehler")
    const platz2Fehler = document.querySelector(".platz2_fehler")
    const platz3Fehler = document.querySelector(".platz3_fehler")
    const platz4Fehler = document.querySelector(".platz4_fehler")
    const platz5Fehler = document.querySelector(".platz5_fehler")

    const platz1Von = document.querySelector(".platz1_von")
    const platz2Von = document.querySelector(".platz2_von")
    const platz3Von = document.querySelector(".platz3_von")
    const platz4Von = document.querySelector(".platz4_von")
    const platz5Von = document.querySelector(".platz5_von")

    // Start Anweisung
    let startInterval;
    const startAnweisung = document.querySelector(".start")
    const startParagraph = document.querySelector(".start_paragraph")
    flackernStart()

    // Hier Hauptprogramm
    let gestartet = false
    window.addEventListener("keypress", (ev) => {

        if (textCounter < text.length) {
            anschlaege++
        }

        if (String.fromCharCode(ev.keyCode) === " " && !gestartet) {
            timerStart()
            gestartet = true
            timerGestartet = true
            setTimeout(clearInterval(startInterval))
            taste1.classList.remove("shift")
            startAnweisung.classList.add("auswertung_none")
        }

        if (timerGestartet) {
            key()
            let buchstabeZurKontrolle = text[textCounter - 1]
            tastenMarkiren(text[textCounter])
            fehlerZählen(buchstabeZurKontrolle, ev)
            textCounter++
        }
    })

    // Start Anweisung
    function flackernStart() {
        startInterval = setInterval(() => {
            startParagraph.classList.toggle("start_flackern")
            taste1.classList.toggle("shift")
        }, 1000)
    }

    // Fehler Zählung
    function fehlerZählen(buchstabeZurKontrolle, ev) {

        // zählt alle Buchstaben
        for (const buchstabe in anzahlFehlerProBuchstabe) {
            if (anzahlFehlerProBuchstabe[buchstabe][0] === buchstabeZurKontrolle) {
                anzahlFehlerProBuchstabe[buchstabe][2] += 1
            }
        }
        // zählt fehler
        if (buchstabeZurKontrolle !== String.fromCharCode(ev.keyCode) && buchstabeZurKontrolle !== undefined) {
            fehler++
            for (const buchstabe in anzahlFehlerProBuchstabe) {
                if (anzahlFehlerProBuchstabe[buchstabe][0] === buchstabeZurKontrolle) {
                    anzahlFehlerProBuchstabe[buchstabe][1] += 1
                }
            }
        }
    }

    // fehler Auswertung
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
                anzahlFehlerProBuchstabe[buchstabe][0] !== platz1[0]) {

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

    // Start Anweisung
    function flackernStart() {
        startInterval = setInterval(() => {
            startParagraph.classList.toggle("start_flackern")
            taste1.classList.toggle("shift")
        }, 1000)
    }


    // Funktionen Auswertung Anzeigen
    function fehlerInProzent(fehler, textCounter) {
        timerGestartet = false
        const prozentFehler = parseInt(fehler / textCounter * 100)
        if (isNaN(prozentFehler)) {
            return 0
        } else {
            return prozentFehler
        }
    }

    function autoAuswertung() {
        const listeTopFünfFehler = fehlerAuswertung()
        setTimeout(clearInterval(startInterval))
        setTimeout(clearInterval(timer), 50)
        auswertungAnzeigen.classList.add("auswertung_notNone")
        auswertungAnzeigen.classList.remove("auswertung_none")
        auswertungAnschlaege.innerText = parseInt(anschlaegeProMin)
        platz1Buchstabe.innerHTML = listeTopFünfFehler[0][0]
        platz2Buchstabe.innerHTML = listeTopFünfFehler[1][0]
        platz3Buchstabe.innerHTML = listeTopFünfFehler[2][0]
        platz4Buchstabe.innerHTML = listeTopFünfFehler[3][0]
        platz5Buchstabe.innerHTML = listeTopFünfFehler[4][0]

        platz1Fehler.innerHTML = listeTopFünfFehler[0][1]
        platz2Fehler.innerHTML = listeTopFünfFehler[1][1]
        platz3Fehler.innerHTML = listeTopFünfFehler[2][1]
        platz4Fehler.innerHTML = listeTopFünfFehler[3][1]
        platz5Fehler.innerHTML = listeTopFünfFehler[4][1]

        platz1Von.innerHTML = listeTopFünfFehler[0][2]
        platz2Von.innerHTML = listeTopFünfFehler[1][2]
        platz3Von.innerHTML = listeTopFünfFehler[2][2]
        platz4Von.innerHTML = listeTopFünfFehler[3][2]
        platz5Von.innerHTML = listeTopFünfFehler[4][2]

        spanFehlergesamt.innerText = fehler
        spanFehlerProzent.innerText = fehlerInProzent(fehler, textCounter)
    }

    function objektAufNullSetzen() {
        for (const element in anzahlFehlerProBuchstabe) {
            anzahlFehlerProBuchstabe[element][1] = 0
            anzahlFehlerProBuchstabe[element][2] = 0
        }
    }

    auswertungReset.addEventListener("click", () => {
        startAnweisung.classList.remove("auswertung_none")
        auswertungAnzeigen.classList.add("auswertung_none")
        auswertungAnzeigen.classList.remove("auswertung_notNone")
        menueTimer.innerText = 0
        anschlaegeProMin.innerText = 0
        timerGestartet = false
        gestartet = false
        fehler = 0
        setTimeout(clearInterval(timer), 50)
        textCounter = 0
        text = texte.get(menueTextAuswahl.value)
        laufenderText()
        flackernStart()
        clearTastatur()
        objektAufNullSetzen()


    })

    // Funktionen Anschlagmessung
    setInterval(() => {
        if (anschlaege / parseInt(menueTimer.innerText) === Infinity || menueAnschlagMin.innerHTML === "NaN") {
            menueAnschlagMin.innerHTML = 0
        } else if (parseInt(menueTimer.innerText) < userTime && menueTimer.innerHTML !== "0") {
            anschlaegeProMin = anschlaege / (parseInt(menueTimer.innerText)) * 60
            menueAnschlagMin.innerText = parseInt(anschlaegeProMin)
        }
    }, 100)

    // Funktionen Textauswahl
    let ersteWahl = true
    menueTextAuswahl.addEventListener("click", () => {
        if (!ersteWahl) {
            let t = menueTextAuswahl.value
            text = texte.get(t)
            laufenderText()
        } else ersteWahl = false
    })

    // Funktionen Zeitauswahl
    let ersteWahlTime = true
    auswahlTime.addEventListener("click", () => {
        if (!ersteWahlTime) {
            userTime = parseInt(auswahlTime.value)
        } else {
            ersteWahlTime = false
        }
    })

    // Funktionen Timer
    setInterval(() => {
        if (parseInt(menueTimer.innerText) >= userTime) {
            setTimeout(() => { clearInterval(timer) }, 49)
            autoAuswertung()
        }
    }, 100)


    buttonStartTimer.addEventListener("click", () => {
        autoAuswertung()
        startAnweisung.classList.add("auswertung_none")
    })


    function timerStart() {
        anschlaege = 0
        anschlaegeProMin = 0
        let startTime = Date.now()
        timer = setInterval(() => {
            menueTimer.innerText = parseInt((Date.now() - startTime) / 1_000)
        }, 100)
    }

    // Textlauf
    function key() {

        laufenderText()

        if (textCounter >= text.length) {
            autoAuswertung()
            return
        }
    }

    function laufenderText() {
        if (textCounter < 15) {
            textLaufF.innerHTML = text.slice(0, textCounter)
        } else {
            textLaufF.innerHTML = text.slice(textCounter - 15, textCounter)
        }
        textLaufM.innerHTML = "<u>" + text[textCounter] + "<u>"
        textLaufA.innerHTML = text.slice(textCounter + 1, textCounter + 15)
    }

    // Function Tasten clear
    function clearTastatur() {

        taste1.classList.remove("green")
        taste2.classList.remove("green")
        taste3.classList.remove("green")
        taste4.classList.remove("green")
        taste5.classList.remove("green")
        tasteGelb.classList.remove("green")
        tasteRot.classList.remove("green")
        tasteGelb.classList.remove("shift")
        tasteRot.classList.remove("shift")
        setTimeout(clearInterval(shiftAnzeige))
        setTimeout(clearInterval(zahlAnzeige))
        setTimeout(clearInterval(sonderZeichenAnzeige))
    }


    function tastenMarkiren(buchstabe) {

        clearTastatur()

        if (buchstabe === " ") {
            taste1.classList.add("green")
        }

        if (buchstabe === "a") {
            taste1.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "b") {
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "c") {
            taste2.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "d") {
            taste1.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "e") {
            taste3.classList.add("green")
        }

        if (buchstabe === "f") {
            taste1.classList.add("green")
            taste2.classList.add("green")
        }

        if (buchstabe === "g") {
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "h") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "i") {
            taste4.classList.add("green")
        }

        if (buchstabe === "j") {
            taste2.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "k") {
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "l") {
            taste2.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "m") {

            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "n") {
            taste5.classList.add("green")
        }

        if (buchstabe === "o") {
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "p") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "q") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "r") {
            taste1.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "s") {
            taste2.classList.add("green")
        }

        if (buchstabe === "t") {
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "u") {
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "v") {
            taste2.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "w") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "x") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "y") {
            taste1.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "z") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
        }

        // Großbuchstaben
        if (buchstabe === "A") {
            schift()
            taste1.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "B") {
            schift()
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "C") {
            schift()
            taste2.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "D") {
            schift()
            taste1.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "E") {
            schift()
            taste3.classList.add("green")
        }

        if (buchstabe === "F") {
            schift()
            taste1.classList.add("green")
            taste2.classList.add("green")
        }

        if (buchstabe === "G") {
            schift()
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "H") {
            schift()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "I") {
            schift()
            taste4.classList.add("green")
        }

        if (buchstabe === "J") {
            schift()
            taste2.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "K") {
            schift()
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "L") {
            schift()
            taste2.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "M") {
            schift()
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "N") {
            schift()
            taste5.classList.add("green")
        }

        if (buchstabe === "O") {
            schift()
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "P") {
            schift()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "Q") {
            schift()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "R") {
            schift()
            taste1.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "S") {
            schift()
            taste2.classList.add("green")
        }

        if (buchstabe === "T") {
            schift()
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "U") {
            schift()
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "V") {
            schift()
            taste2.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "W") {
            schift()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "X") {
            schift()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "Y") {
            schift()
            taste1.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "Z") {
            schift()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
        }

        // Umlaute
        if (buchstabe === "ä") {
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "ö") {
            taste3.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "ü") {
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "ß") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "Ä") {
            schift()
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "Ö") {
            schift()
            taste3.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "Ü") {
            schift()
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste5.classList.add("green")
        }

        // Zahlen
        if (buchstabe === "0") {
            zahlMarkirung()
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "1") {
            zahlMarkirung()
            taste2.classList.add("green")
        }

        if (buchstabe === "2") {
            zahlMarkirung()
            taste3.classList.add("green")
        }

        if (buchstabe === "3") {
            zahlMarkirung()
            taste4.classList.add("green")
        }

        if (buchstabe === "4") {
            zahlMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
        }

        if (buchstabe === "5") {
            zahlMarkirung()
            taste1.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "6") {
            zahlMarkirung()
            taste1.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "7") {
            zahlMarkirung()
            taste2.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "8") {
            zahlMarkirung()
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "9") {
            zahlMarkirung()
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        // Sonderzeichen

        if (buchstabe === "'") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "-") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "]") {
            sonderZeichenMarkirung()
            taste2.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "^") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "[") {
            sonderZeichenMarkirung()
            taste3.classList.add("green")
        }

        if (buchstabe === "?") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
        }

        if (buchstabe === "=") {
            sonderZeichenMarkirung()
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "#") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "!") {
            sonderZeichenMarkirung()
            taste4.classList.add("green")
        }

        if (buchstabe === "§") {
            sonderZeichenMarkirung()
            taste2.classList.add("green")
            taste5.classList.add("green")

        }

        if (buchstabe === "@") {
            sonderZeichenMarkirung()
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "_") {
            sonderZeichenMarkirung()
            taste2.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === ">") {
            sonderZeichenMarkirung()
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === ")") {
            sonderZeichenMarkirung()
            taste5.classList.add("green")
        }

        if (buchstabe === "|") {
            sonderZeichenMarkirung()
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe == "+") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if(buchstabe === "/"){
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "$") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "*") {
            sonderZeichenMarkirung()
            taste2.classList.add("green")
        }

        if (buchstabe === "%") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "&") {
            sonderZeichenMarkirung()
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "(") {
            sonderZeichenMarkirung()
            taste2.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "<") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "\\") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "`") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste4.classList.add("green")
            taste5.classList.add("green")
        }

        if (buchstabe === "\"") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
        }

        if (buchstabe === "€") {
            sonderZeichenMarkirung()
            taste1.classList.add("green")
        }

        if (buchstabe === ".") {
            taste3.classList.add("green")
            tasteRot.classList.add("green")
        }

        if (buchstabe === ",") {
            taste2.classList.add("green")
            tasteGelb.classList.add("green")
        }

        if (buchstabe === ":") {
            taste2.classList.add("green")
            taste3.classList.add("green")
            tasteGelb.classList.add("green")
            tasteRot.classList.add("green")
        }

        if (buchstabe === ";") {
            taste1.classList.add("green")
            taste2.classList.add("green")
            taste3.classList.add("green")
            tasteGelb.classList.add("green")
            tasteRot.classList.add("green")
        }

        if (buchstabe === "}") {
            zahlMarkirung()
            taste2.classList.add("green")
            taste4.classList.add("green")
        }

        if (buchstabe === "{") {
            zahlMarkirung()
            taste1.classList.add("green")
            taste5.classList.add("green")
        }
    }

    let shiftAnzeige;
    function schift() {
        shiftAnzeige = setInterval(() => {
            tasteRot.classList.toggle("shift")
            tasteGelb.classList.toggle("shift")
        }, 500)
    }

    let zahlAnzeige;
    function zahlMarkirung() {
        zahlAnzeige = setInterval(() => {
            tasteRot.classList.toggle("shift")
        }, 500)
    }

    let sonderZeichenAnzeige;
    function sonderZeichenMarkirung() {
        sonderZeichenAnzeige = setInterval(() => {
            tasteGelb.classList.toggle("shift")
        }, 500)
    }
})