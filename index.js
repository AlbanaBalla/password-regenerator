const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genpassEl = document.getElementById("genpass-el")

genpassEl.addEventListener("click", function() {
let passOne = document.getElementById("pass")
let passTwo = document.getElementById("passtwo-el")
let firstPass = ""
let secondPass = ""
    for ( i = 0; i < 16; i++) {
        let randomPassOne = Math.floor (Math.random() * characters.length )
        let randomPassTwo = Math.floor (Math.random() * characters.length )
        firstPass += characters[randomPassOne]
        secondPass += characters[randomPassTwo]
    }
    passOne.textContent = firstPass
    passTwo.textContent = secondPass
})