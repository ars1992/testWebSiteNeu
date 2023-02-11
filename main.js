
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
    let userTime = 1
    let timer;
    let timerGestartet = false


    // Textauswahl
    const menueTextAuswahl = document.querySelector(".menue_textAuswahl")
    const textLauf = document.querySelector(".text_lauf")
    const texte = new Map([
        ["Text1", "Hallo hhhhhhhhhhdtztruqwerrtzuiopasdfghjklöyxcvbnm  dfghjwertzvf dfgh yswxde cfr vgtrfc bhzujnm "],
        ["Text2", "welt ffffffffffffkkkkkkkkkkk eee abcdef"],
        ["Text3", "jetzt qwertz uiopü as df gh jk löä yx cvbn m"]])

    // anschläge pro min
    let anschlaege = 0
    let anschlaegeProMin = 0
    const menueAnschlagMin = document.querySelector(".menue_anschlaegeMin")
    const auswertungReset = document.querySelector(".auswertung_resetButton")

    // auswertung
    const auswertungAnschlaege = document.querySelector(".span_anschlaege")
    const auswertungAnzeigen = document.querySelector(".auswertung")

    // Hier Hauptprogramm
    window.addEventListener("keypress", (x) => {
        console.log(x, " lampda", anschlaege)
        anschlaege++
    })


    // Funktionen Auswertung Anzeigen
    function autoAuswertung() {
        auswertungAnzeigen.classList.add("auswertung_notNone")
        auswertungAnzeigen.classList.remove("auswertung_none")
        auswertungAnschlaege.innerHTML = parseInt(anschlaegeProMin)
    }

    auswertungReset.addEventListener("click", () => {
        auswertungAnzeigen.classList.add("auswertung_none")
        auswertungAnzeigen.classList.remove("auswertung_notNone")
        menueTimer.innerText = 0
        anschlaegeProMin.innerText = 0
        buttonStartTimer.innerText = "Start"
        timerGestartet = false
        setTimeout(clearInterval(timer), 50)

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
            textLauf.innerHTML = texte.get(t)
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
        if (!timerGestartet) {
            timerStart()
            timerGestartet = true
        } else {
            autoAuswertung()
        }
    })


    function timerStart() {
        anschlaege = 0
        anschlaegeProMin = 0
        let startTime = Date.now()
        timer = setInterval(() => {
            menueTimer.innerText = parseInt((Date.now() - startTime) / 1_000)
        }, 100)
        buttonStartTimer.innerText = "Stop"
    }


    function tastenMarkiren(buchstabe) {

        taste1.style.backgroundColor = colorWhite
        taste2.style.backgroundColor = colorWhite
        taste3.style.backgroundColor = colorWhite
        taste4.style.backgroundColor = colorWhite
        taste5.style.backgroundColor = colorWhite

        tasteBlau.style.backgroundColor = colorBlue
        tasteGelb.style.backgroundColor = colorYellow
        tasteRot.style.backgroundColor = colorRed
        taste9.style.backgroundColor = colorDarkblue
        taste10.style.backgroundColor = colorDarkblue



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
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "B") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "C") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "D") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "E") {
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "F") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
        }

        if (buchstabe === "G") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "H") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "I") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "J") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "K") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "L") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "M") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "N") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "O") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "P") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "Q") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "R") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

        if (buchstabe === "S") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
        }

        if (buchstabe === "T") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "U") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
        }

        if (buchstabe === "V") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "W") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "X") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "Y") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste4.style.backgroundColor = colorGreen
            taste5.style.backgroundColor = colorGreen
        }

        if (buchstabe === "Z") {
            tasteGelb.style.backgroundColor = colorGreen
            tasteRot.style.backgroundColor = colorGreen
            taste1.style.backgroundColor = colorGreen
            taste2.style.backgroundColor = colorGreen
            taste3.style.backgroundColor = colorGreen
        }

    }

})