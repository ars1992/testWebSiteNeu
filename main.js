
document.addEventListener("DOMContentLoaded", () => {
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
    const colorGreen = "green"
    const colorWhite = "whitesmoke"
    const colorRed = "red"
    const colorYellow = "yellow"
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
        ["Text1", "AAAA&nbsp;ssUss&nbsp;ssBss&nbsp;ssXss"],
        ["Text2", "welt ffffffffffffkkkkkkkkkkk eee abcdef"],
        ["Text3", "sein rad flog zum pkw byt cjv qhx äöüß"]])
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
            startAnweisung.classList.add("auswertung_none")
        }

        if (timerGestartet) {
            key()
            let buchstabeZurKontrolle = text[textCounter - 1]
            tastenMarkiren(text[textCounter])
            textCounter++
            if (buchstabeZurKontrolle !== String.fromCharCode(ev.keyCode) && buchstabeZurKontrolle !== undefined) {
                fehler++
                console.log(buchstabeZurKontrolle, ev.keyCode)
            }
        }

    })
    
    // Start Anweisung
    function flackernStart() {
        startInterval = setInterval(() => {
            startParagraph.classList.toggle("start_flackern")
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
        setTimeout(clearInterval(timer), 50)
        auswertungAnzeigen.classList.add("auswertung_notNone")
        auswertungAnzeigen.classList.remove("auswertung_none")
        auswertungAnschlaege.innerText = parseInt(anschlaegeProMin)
        spanFehlergesamt.innerText = fehler
        spanFehlerProzent.innerText = fehlerInProzent(fehler, textCounter)
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
            //textLauf.innerHTML = texte.get(t)
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

        // if (!timerGestartet) {
        //     timerStart()
        //     timerGestartet = true
        //     gestartet = true
        //     key()
        //     tastenMarkiren(text[textCounter])
        // } else {
        //     autoAuswertung()
        // }
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
        // let aktuellerBuchstabeTextStart = document.querySelector(".text_lauf-m").innerHTML
        // let aktuellerBuchstabeText = document.querySelector(".text_lauf-a").innerHTML[0]

        laufenderText()

        if (textCounter >= text.length) {
            autoAuswertung()
            return
        }

        // if (textCounter == 0) {
        //     tastenMarkiren(aktuellerBuchstabeTextStart)
        // } else {
        //     tastenMarkiren(aktuellerBuchstabeText)
        //    // textCounter++

        // }
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


    function tastenMarkiren(buchstabe) {

        taste1.style.backgroundColor = colorWhite
        taste2.style.backgroundColor = colorWhite
        taste3.style.backgroundColor = colorWhite
        taste4.style.backgroundColor = colorWhite
        taste5.style.backgroundColor = colorWhite

        tasteBlau.style.backgroundColor = colorBlue
        // tasteGelb.style.backgroundColor = colorYellow
        // tasteRot.style.backgroundColor = colorRed
        taste9.style.backgroundColor = colorDarkblue
        taste10.style.backgroundColor = colorDarkblue
        tasteGelb.classList.remove("shift")
        tasteRot.classList.remove("shift")
        setTimeout(clearInterval(shiftAnzeige))



        if (buchstabe === " ") {
            taste1.style.backgroundColor = colorGreen
        }
        if (buchstabe === "a") {
            taste1.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "b") {
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "c") {
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "d") {
            taste1.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "e") {
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "f") {
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
        }

        if (buchstabe === "g") {
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "h") {
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "i") {
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "j") {
            taste2.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "k") {
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "l") {
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "m") {

            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "n") {
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "o") {
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "p") {
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "q") {
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "r") {
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "s") {
            taste2.style.backgroundColor = colorGreen
        }

        if (buchstabe === "t") {
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "u") {
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "v") {
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "w") {
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "x") {
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "y") {
            taste1.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "z") {
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

        // Großbuchstaben
        if (buchstabe === "A") {
            // tasteGelb.style.backgroundColor = colorGreen
            // tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            schift()

        }

        if (buchstabe === "B") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "C") {
            schift()
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "D") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "E") {
            schift()
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "F") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
        }

        if (buchstabe === "G") {
            schift()
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "H") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "I") {
            schift()
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "J") {
            schift()
            taste2.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "K") {
            schift()
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "L") {
            schift()
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "M") {
            schift()
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "N") {
            schift()
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "O") {
            schift()
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "P") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "Q") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "R") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "S") {
            schift()
            taste2.style.backgroundColor = colorGreen
        }

        if (buchstabe === "T") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "U") {
            schift()
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "V") {
            schift()
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "W") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "X") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "Y") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "Z") {
            schift()
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

    }

    let shiftAnzeige;
    function schift() {
        shiftAnzeige = setInterval(() => {
            tasteRot.classList.toggle("shift")
            tasteGelb.classList.toggle("shift")
        }, 500)
    }


})