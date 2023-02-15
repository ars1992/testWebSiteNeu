"use strict"



JsonTextlader = {

    jsonDateiName: "test.json",

    getJsonDatei: () => {
        let xml = null
        const data = null
        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest()
        }

        if (xml === null) {
            console.log("fehler")
        }

        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200) {
                data = xml.responseText
            }
        }

        xml.open("GET", JsonTextlader.jsonDateiName, true)
        xml.send()
        return data
    },



    gewähltenTextAusJsonFileFinden: (jsonFile, auswahl) => {
        const texte = JSON.parse(jsonFile, { encoding: "utf-8" })
        for (const text in texte) {
            if (text === auswahl) {
                return texte[text]
            }
        }
    }
}
