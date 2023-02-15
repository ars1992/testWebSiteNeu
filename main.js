"use strict"
const fehlerVerarbeitung = {

    _list: [
        ["a", 0, 0], ["b", 0, 0], ["c", 0, 0],
        ["d", 0, 0], ["e", 0, 0], ["f", 0, 0],
        ["g", 0, 0], ["h", 0, 0], ["i", 0, 0],
        ["j", 0, 0], ["k", 0, 0], ["l", 0, 0],
        ["m", 0, 0], ["n", 0, 0], ["o", 0, 0],
        ["p", 0, 0], ["q", 0, 0], ["r", 0, 0],
        ["s", 0, 0], ["t", 0, 0], ["u", 0, 0],
        ["v", 0, 0], ["w", 0, 0], ["x", 0, 0],
        ["z", 0, 0], ["y", 0, 0], ["A", 0, 0],
        ["B", 0, 0], ["C", 0, 0], ["D", 0, 0],
        ["E", 0, 0], ["F", 0, 0], ["G", 0, 0],
        ["H", 0, 0], ["I", 0, 0], ["J", 0, 0],
        ["K", 0, 0], ["L", 0, 0], ["M", 0, 0],
        ["N", 0, 0], ["O", 0, 0], ["P", 0, 0],
        ["Q", 0, 0], ["R", 0, 0], ["S", 0, 0],
        ["T", 0, 0], ["U", 0, 0], ["V", 0, 0],
        ["W", 0, 0], ["X", 0, 0], ["Z", 0, 0],
        ["Y", 0, 0], ["ä", 0, 0], ["ü", 0, 0],
        ["ö", 0, 0], ["ß", 0, 0], ["Ä", 0, 0],
        ["Ö", 0, 0], ["Ü", 0, 0], [" ", 0, 0],
        ["0", 0, 0], ["1", 0, 0], ["2", 0, 0],
        ["3", 0, 0], ["4", 0, 0], ["5", 0, 0],
        ["6", 0, 0], ["7", 0, 0], ["8", 0, 0],
        ["9", 0, 0],
        ["'", 0, 0], ["-", 0, 0], ["]", 0, 0],
        ["^", 0, 0], ["[", 0, 0], ["?", 0, 0],
        ["=", 0, 0], ["#", 0, 0], ["!", 0, 0],
        ["§", 0, 0], ["@", 0, 0], ["_", 0, 0],
        [">", 0, 0], [")", 0, 0], ["|", 0, 0],
        ["+", 0, 0], ["/", 0, 0], ["$", 0, 0],
        ["*", 0, 0], ["%", 0, 0], ["&", 0, 0],
        [")", 0, 0], ["<", 0, 0], ["\\", 0, 0],
        ["`", 0, 0], ["\"", 0, 0], ["€", 0, 0],
        [".", 0, 0], [",", 0, 0], [":", 0, 0],
        [";", 0, 0], ["}", 0, 0], ["{", 0, 0],
    ],

    istRichtigeReihenfolge: function () {
        for (let i = 1; i < this._list.length; i++) {
            if (this._list[i - 1][1] < this._list[i][1]) {
                return false
            }
        }
        return true
    },

    getfehlerAuswertung: function () {
        while (!this.istRichtigeReihenfolge()) {
            for (let i = 1; i < this._list.length; i++) {
                if (this._list[i - 1][1] < this._list[i][1]) {
                    const temp = this._list[i - 1]
                    this._list[i - 1] = this._list[i]
                    this._list[i] = temp
                }
            }
        }
        return this._list.slice(0, 5)
    },

    setFehlerZähler: function (eingabe, anzeige) {
        if (eingabe !== anzeige) {
            for (let i = 0; i < this._list.length; i++) {
                if (this._list[i][0] === anzeige) {
                    this._list[i][1]++
                }
            }
        }
    },

    setZeichenZähler: function (anzeige) {
        for (let i = 0; i < this._list.length; i++) {
            if (anzeige === this._list[i][0]) {
                this._list[i][2]++
            }
        }
    },

    getFehlerGesamt: function () {
        let fehlerGesamt = 0
        for (const element of this._list) {
            fehlerGesamt += element[1]
        }
        return fehlerGesamt
    },

    getFehlerInProzent: function () {
        if (this.zeichenGesamt() <= 0) {
            return 0
        }
        return parseInt(this.getFehlerGesamt() / this.zeichenGesamt() * 100)
    },

    zeichenGesamt: function () {
        let zeichenGesamt = 0
        for (const element of this._list) {
            zeichenGesamt += element[2]
        }
        return zeichenGesamt
    },

    setFehlerZurückSetzen: function () {
        for (let i = 0; i < this._list.length; i++) {
            this._list[i][1] = 0
            this._list[i][2] = 0
        }
    },
}

const StartAnzeige = {
    _startAusgabe: {
        startDiv: document.querySelector(".start"),
        startPara: document.querySelector(".start_paragraph")
    },
    startInterval: null,

    flackernAnzeige: function () {
        this.startInterval = setInterval(() => {
            this._startAusgabe.startPara.classList.toggle("start_flackern")
            Tastatur.taste1.classList.toggle("shift")
        }, 1000)
    },

    ausblenden: function () {
        Tastatur.taste1.classList.remove("shift")
        setTimeout(clearInterval(this.startInterval))
        this._startAusgabe.startDiv.classList.add("auswertung_none")
    },
}

const JsonTextlader = {

    jsonDateiName: "test.json",
    data: null,

    _getJsonDatei: () => {
        let xml = null
        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest()
        }

        if (xml === null) {
            console.log("Fehler")
        }

        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200) {
                JsonTextlader.data = xml.responseText
            }
        }

        xml.open("GET", JsonTextlader.jsonDateiName, true)
        xml.send()
    },



    gewähltenTextAusJsonFileFinden: (jsonFile, auswahl) => {
        JsonTextlader.jsonDateiName = jsonFile
        JsonTextlader._getJsonDatei()
        const texte = JSON.parse(JsonTextlader.data , { encoding: "utf-8" })
        for (const text in texte) {
            if (text === auswahl) {
                console.log(texte[text])
                return texte[text]
            }
        }
    }
}

const Menue = {

    menueTextAuswahl: document.querySelector(".menue_textAuswahl"),
    menueZeitAuswahl: document.querySelector(".menue_zeitAuswahl"),
    menueStoppButton: document.querySelector(".menue_startButton"),
    menueAnschlagAusgabe: document.querySelector(".menue_anschlaegeMin"),
    menueZeitAusgabe: document.querySelector(".menue_timer"),

    _userTime: 10,
    _time: null,
    _aktTime: 0,
    _anschlaegeProMin: 0,

    ausgewählterText: "V1.0 Schreibtrainer",

    _timerStop: function () {
        setInterval(() => {
            if (this._aktTime >= this._userTime) {
                setTimeout(() => { clearInterval(this._time), 50 })
                Auswertung.autoAuswertung()
            }
        })
    },

    _timerStart: function () {
        let startTime = Date.now()
        this._time = setInterval(() => {
            this._aktTime = parseInt((Date.now() - startTime) / 1_000)
            this.menueZeitAusgabe.innerText = this._aktTime
        }, 100)
    },

    timerStopButton: function () {
        this.menueStoppButton.addEventListener("click", () => {
            Auswertung.autoAuswertung()
        })
    },

    ersteWahlTime: true,
    set_UserTime: function () {
        this.menueZeitAuswahl.addEventListener("click", () => {
            if (!this.ersteWahlTime) {
                this._userTime = parseInt(this.menueZeitAuswahl.value)
            } else {
                this.ersteWahlTime = false
            }
        })
    },

    setText: function () {
        let ersteWahlText = true
        this.menueTextAuswahl.addEventListener("click", () => {
            if (!ersteWahlText) {
                console.log(JsonTextlader.gewähltenTextAusJsonFileFinden("test.json", this.menueTextAuswahl.value), "setText")
                this.ausgewählterText = JsonTextlader.gewähltenTextAusJsonFileFinden("test.json", this.menueTextAuswahl.value)
            } else {
                ersteWahlText = false
            }
            TextLauf.laufenderText(Tastatur.textCounter)
        })
    },

    anschlagMessung: function () {
        setInterval(() => {
            if (Tastatur.textCounter / Menue._aktTime === Infinity) {
                Menue.menueAnschlagAusgabe.innerText = 0
            } else if (Menue._aktTime < this._userTime && Menue._aktTime !== 0) {
                Menue._anschlaegeProMin = (Tastatur.textCounter -1) / Menue._aktTime * 60
                Menue.menueAnschlagAusgabe.innerText = parseInt(Menue._anschlaegeProMin)
            }
        }, 100)
    },

    getAusgewählterText: function () {
        return this.ausgewählterText
    },

    getAnschlagProMin: function () {
        return this._anschlaegeProMin
    },

    setAnzeigeZeitAnschlagAufNull: function () {
        this.menueAnschlagAusgabe.innerText = 0
        this.menueZeitAusgabe.innerText = 0
        this._aktTime = 0
        this._anschlaegeProMin = 0
    }
}

const TextLauf = {

    textLaufF: document.querySelector(".text_lauf-f"),
    textLaufM: document.querySelector(".text_lauf-m"),
    textLaufA: document.querySelector(".text_lauf-a"),

    laufenderText: function (counter) {
        console.log("laufenderText", Tastatur.textCounter)
        if (counter < 15) {
            this.textLaufF.innerText = Menue.getAusgewählterText().slice(0, counter)
        } else {
            this.textLaufF.innerText = Menue.getAusgewählterText().slice(counter - 15, counter)
        }

        this.textLaufM.innerHTML = "<u>" + Menue.getAusgewählterText()[counter] + "<u>"
        this.textLaufA.innerText = Menue.getAusgewählterText().slice(counter + 1, counter + 15)
    }
}

const Tastatur = {

    taste1: document.querySelector(".tasta_taste-1"),
    taste2: document.querySelector(".tasta_taste-2"),
    taste3: document.querySelector(".tasta_taste-3"),
    taste4: document.querySelector(".tasta_taste-4"),
    taste5: document.querySelector(".tasta_taste-5"),
    tasteGelb: document.querySelector(".tasta_taste-gelb"),
    tasteRot: document.querySelector(".tasta_taste-rot"),
    textCounter: 0,

    einzelneTasten: {
        tasteLeer: () => {
            Tastatur.taste1.classList.add("green")
        },

        tasteK_a: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste4.classList.add("green")
        },

        tasteK_b: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
        },

        tasteK_c: () => {
            Tastatur.taste2.classList.add("green")
            Tastatur.taste4.classList.add("green")
        },

        tasteK_d: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_e: () => {
            Tastatur.taste3.classList.add("green")
        },

        tasteK_f: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste2.classList.add("green")
        },

        tasteK_g: () => {
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_h: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste2.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_i: () => {
            Tastatur.taste4.classList.add("green")
        },

        tasteK_j: () => {
            Tastatur.taste2.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_k: () => {
            Tastatur.taste2.classList.add("green")
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_l: () => {
            Tastatur.taste2.classList.add("green")
            Tastatur.taste3.classList.add("green")
        },

        tasteK_m: () => {
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_n: () => {
            Tastatur.taste5.classList.add("green")
        },

        tasteK_o: () => {
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
        },

        tasteK_p: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste2.classList.add("green")
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
        },

        tasteK_q: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste2.classList.add("green")
            Tastatur.taste4.classList.add("green")
        },

        tasteK_r: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste3.classList.add("green")
        },

        tasteK_s: () => {
            Tastatur.taste2.classList.add("green")
        },

        tasteK_t: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_u: () => {
            Tastatur.taste2.classList.add("green")
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
        },

        tasteK_v: () => {
            Tastatur.taste2.classList.add("green")
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_w: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste2.classList.add("green")
            Tastatur.taste3.classList.add("green")
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_x: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste2.classList.add("green")
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_y: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste4.classList.add("green")
            Tastatur.taste5.classList.add("green")
        },

        tasteK_z: () => {
            Tastatur.taste1.classList.add("green")
            Tastatur.taste2.classList.add("green")
            Tastatur.taste3.classList.add("green")
        },
    },

    tastaturAnzeige: (aktuelleTaste) => {
        const kleinBuchstaben = [
            [" ", Tastatur.einzelneTasten.tasteLeer],
            ["a", Tastatur.einzelneTasten.tasteK_a],
            ["b", Tastatur.einzelneTasten.tasteK_b],
            ["c", Tastatur.einzelneTasten.tasteK_c],
            ["d", Tastatur.einzelneTasten.tasteK_d],
            ["e", Tastatur.einzelneTasten.tasteK_e],
            ["f", Tastatur.einzelneTasten.tasteK_f],
            ["g", Tastatur.einzelneTasten.tasteK_g],
            ["h", Tastatur.einzelneTasten.tasteK_h],
            ["i", Tastatur.einzelneTasten.tasteK_i],
            ["j", Tastatur.einzelneTasten.tasteK_j],
            ["k", Tastatur.einzelneTasten.tasteK_k],
            ["l", Tastatur.einzelneTasten.tasteK_l],
            ["m", Tastatur.einzelneTasten.tasteK_m],
            ["n", Tastatur.einzelneTasten.tasteK_n],
            ["o", Tastatur.einzelneTasten.tasteK_o],
            ["p", Tastatur.einzelneTasten.tasteK_p],
            ["q", Tastatur.einzelneTasten.tasteK_q],
            ["r", Tastatur.einzelneTasten.tasteK_r],
            ["s", Tastatur.einzelneTasten.tasteK_s],
            ["t", Tastatur.einzelneTasten.tasteK_t],
            ["u", Tastatur.einzelneTasten.tasteK_u],
            ["v", Tastatur.einzelneTasten.tasteK_v],
            ["w", Tastatur.einzelneTasten.tasteK_w],
            ["x", Tastatur.einzelneTasten.tasteK_x],
            ["y", Tastatur.einzelneTasten.tasteK_y],
            ["z", Tastatur.einzelneTasten.tasteK_z],
        ]
        for (const buchstabe of kleinBuchstaben) {
            if (buchstabe[0] === aktuelleTaste) {
                buchstabe[1]()
            }
        }
    },

    clearTastatur: () => {
        Tastatur.taste1.classList.remove("green")
        Tastatur.taste2.classList.remove("green")
        Tastatur.taste3.classList.remove("green")
        Tastatur.taste4.classList.remove("green")
        Tastatur.taste5.classList.remove("green")
        Tastatur.tasteGelb.classList.remove("green")
        Tastatur.tasteRot.classList.remove("green")
        Tastatur.tasteGelb.classList.remove("shift")
        Tastatur.tasteRot.classList.remove("shift")
    },

    stopProgrammAbfrage: () => {
        if (Tastatur.textCounter > Menue.ausgewählterText.length) {
            Auswertung.autoAuswertung()
        }
    },

    zählerTextCounter: () => {
        if (Tastatur.textCounter <= Menue.ausgewählterText.length) {
            Tastatur.textCounter++
        }
    },

    setTextCounter: (n) => {
        Tastatur.textCounter = n
    }
}

const Auswertung = {

    auswertungAnzeigen: document.querySelector(".auswertung"),
    resetButton: document.querySelector(".auswertung_resetButton"),
    ausgabeFehlerGesamt: document.querySelector(".span_fehlergesamt"),
    ausgabeFehlerProzent: document.querySelector(".span_fehlerProzent"),
    ausgabeAnschläge: document.querySelector(".span_anschlaege"),
    ausgabePlatz_1_Buchsabe: document.querySelector(".platz1_buchstabe"),
    ausgabePlatz_2_Buchsabe: document.querySelector(".platz2_buchstabe"),
    ausgabePlatz_3_Buchsabe: document.querySelector(".platz3_buchstabe"),
    ausgabePlatz_4_Buchsabe: document.querySelector(".platz4_buchstabe"),
    ausgabePlatz_5_Buchsabe: document.querySelector(".platz5_buchstabe"),

    ausgabePlatz_1_Fehler: document.querySelector(".platz1_fehler"),
    ausgabePlatz_2_Fehler: document.querySelector(".platz2_fehler"),
    ausgabePlatz_3_Fehler: document.querySelector(".platz3_fehler"),
    ausgabePlatz_4_Fehler: document.querySelector(".platz4_fehler"),
    ausgabePlatz_5_Fehler: document.querySelector(".platz5_fehler"),

    ausgabePlatz_1_Von: document.querySelector(".platz1_von"),
    ausgabePlatz_2_Von: document.querySelector(".platz2_von"),
    ausgabePlatz_3_Von: document.querySelector(".platz3_von"),
    ausgabePlatz_4_Von: document.querySelector(".platz4_von"),
    ausgabePlatz_5_Von: document.querySelector(".platz5_von"),

    inAuswertung: false,

    autoAuswertung: () => {
        Auswertung.inAuswertung = true
        let listeTopFünfFehler = fehlerVerarbeitung.getfehlerAuswertung()
        setTimeout(clearInterval(Menue._time))
        StartAnzeige.ausblenden()
        Auswertung.auswertungAnzeigen.classList.remove("auswertung_none")
        Auswertung.auswertungAnzeigen.classList.add("auswertung_notNone")

        Auswertung.ausgabeAnschläge.innerText = parseInt(Menue.getAnschlagProMin())
        Auswertung.ausgabeFehlerGesamt.innerText = fehlerVerarbeitung.getFehlerGesamt()
        Auswertung.ausgabeFehlerProzent.innerText = fehlerVerarbeitung.getFehlerInProzent()

        Auswertung.ausgabePlatz_1_Buchsabe.innerText = listeTopFünfFehler[0][0]
        Auswertung.ausgabePlatz_2_Buchsabe.innerText = listeTopFünfFehler[1][0]
        Auswertung.ausgabePlatz_3_Buchsabe.innerText = listeTopFünfFehler[2][0]
        Auswertung.ausgabePlatz_4_Buchsabe.innerText = listeTopFünfFehler[3][0]
        Auswertung.ausgabePlatz_5_Buchsabe.innerText = listeTopFünfFehler[4][0]

        Auswertung.ausgabePlatz_1_Fehler.innerText = listeTopFünfFehler[0][1]
        Auswertung.ausgabePlatz_2_Fehler.innerText = listeTopFünfFehler[1][1]
        Auswertung.ausgabePlatz_3_Fehler.innerText = listeTopFünfFehler[2][1]
        Auswertung.ausgabePlatz_4_Fehler.innerText = listeTopFünfFehler[3][1]
        Auswertung.ausgabePlatz_5_Fehler.innerText = listeTopFünfFehler[4][1]

        Auswertung.ausgabePlatz_1_Von.innerText = listeTopFünfFehler[0][2]
        Auswertung.ausgabePlatz_2_Von.innerText = listeTopFünfFehler[1][2]
        Auswertung.ausgabePlatz_3_Von.innerText = listeTopFünfFehler[2][2]
        Auswertung.ausgabePlatz_4_Von.innerText = listeTopFünfFehler[3][2]
        Auswertung.ausgabePlatz_5_Von.innerText = listeTopFünfFehler[4][2]
    },

    n: 2,
    auswertungReset: () => {
        Auswertung.resetButton.addEventListener("click", () => {
            Auswertung.auswertungAnzeigen.classList.remove("auswertung_notNone")
            Auswertung.auswertungAnzeigen.classList.add("auswertung_none")

            StartAnzeige._startAusgabe.startDiv.classList.remove("auswertung_none")
            StartAnzeige.flackernAnzeige()
            Tastatur.setTextCounter(0)
            Menue.setAnzeigeZeitAnschlagAufNull()
            let n = Auswertung.n++
            Menue.ausgewählterText = `V${n}.0 Schreibtrainer`

            Tastatur.clearTastatur()
            TextLauf.laufenderText(Tastatur.textCounter)

            fehlerVerarbeitung.setFehlerZurückSetzen()

            ProgrammStart.gestartet = false
            Auswertung.inAuswertung = false
        })
    }
}

const ProgrammStart = {

    gestartet: false,

    immer: () => {
        StartAnzeige.flackernAnzeige()
        TextLauf.laufenderText(Tastatur.textCounter)
        Menue.set_UserTime()
        Menue.timerStopButton()
        Menue.setText()
        Auswertung.auswertungReset()
    },

    ersteInteraktion: () => {
        Menue._timerStart()
        Menue._timerStop()
        StartAnzeige.ausblenden()
    },

    interAktion: (taste) => {
        Tastatur.clearTastatur()
        Tastatur.tastaturAnzeige(Menue.ausgewählterText[Tastatur.textCounter])
        TextLauf.laufenderText(Tastatur.textCounter)
        Menue.anschlagMessung()
        fehlerVerarbeitung.setZeichenZähler(Menue.getAusgewählterText()[Tastatur.textCounter])
        fehlerVerarbeitung.setFehlerZähler(
            String.fromCharCode(taste.keyCode),
            Menue.getAusgewählterText()[Tastatur.textCounter - 1]
        )
        Tastatur.zählerTextCounter()
        Tastatur.stopProgrammAbfrage()
    },

    tastenAbfrage: () => {
        window.addEventListener("keypress", (taste) => {
            console.log(taste)
            if (Auswertung.inAuswertung) {
                return
            }

            if (String.fromCharCode(taste.keyCode) === " " && !ProgrammStart.gestartet) {
                ProgrammStart.ersteInteraktion()
                ProgrammStart.gestartet = true
            }

            if (ProgrammStart.gestartet) {
                ProgrammStart.interAktion(taste)

            }
        })
    },

    START: () => {
        document.addEventListener("DOMContentLoaded", () => {
            ProgrammStart.immer()
            ProgrammStart.tastenAbfrage()
        })
    },
}

ProgrammStart.START()