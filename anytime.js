// ==UserScript==
// @name         Yeezle Anytime
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  I just wished this game was fun to play anytime, not just one game per day!
// @author       Thiago Vieira
// @match        https://yeezle.xyz/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yeezle.xyz
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
    window.resetGameState();
    window.mysteryNumber = {};
    window.mysteryDouble = {};
    window.mysterySong = {};
    async function getRandomMysterySong() {
        mysteryNumber = Math.floor(Math.random() * 175) + 1;
        await fetch('/datasheetNoSkit.json')
            .then(response => response.json())
            .then(data => {
                mysteryDouble = data.numbers[mysteryNumber].title
            })
        await fetch('/datasheetNoSkit.json')
            .then(response => response.json())
            .then(data => {
                mysterySong = data.songs[mysteryDouble]
            })
    }
    getRandomMysterySong();
})();