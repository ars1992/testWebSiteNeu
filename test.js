"use strict"
const fehlerVerarbeitung = {

    _list: [
        ["a", 1, 0], ["b", 0, 0], ["c", 0, 0],
        ["d", 2, 0], ["e", 0, 0], ["f", 0, 0],
        ["g", 3, 0], ["h", 0, 0], ["i", 0, 0],
        ["j", 4, 19], ["k", 0, 0], ["l", 0, 0],
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

// fehlerVerarbeitung.setZeichenZähler("l")
// fehlerVerarbeitung.setFehlerZähler("x", "l")
// console.log(fehlerVerarbeitung.getFehlerGesamt(), fehlerVerarbeitung.zeichenGesamt(), fehlerVerarbeitung.getFehlerInProzent())
// console.log(fehlerVerarbeitung.getfehlerAuswertung())
// fehlerVerarbeitung.setFehlerZurückSetzen()
// console.log(fehlerVerarbeitung.getfehlerAuswertung())



const t = {
    f: 0,

    fp: function() {
        this.f++
        return this.f
    }
}

console.log(t.f)
console.log(t.fp())
console.log(t.f)
console.log(t.fp())
console.log(t.f)




