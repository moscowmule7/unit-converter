/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertButton = document.getElementById("convert-btn")
let inputUnit = document.getElementById("input-unit")
let lengthText = document.getElementById("length-text")
let volumeText = document.getElementById("volume-text")
let massText = document.getElementById("mass-text")
let num = 0

convertButton.addEventListener("click", function() {
    num = inputUnit.value
    convertLength()
    convertVolume()
    convertMass()
})

function convertLength() {
    let feet = (num * 3.281).toFixed(3)
    let meter = (num / 3.281).toFixed(3)
    lengthText.innerHTML = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
}

function convertVolume() {
    let gallon = (num * 0.264).toFixed(3)
    let liter = (num / 0.264).toFixed(3)
    volumeText.innerHTML = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters `
}

function convertMass() {
    let pound = (num * 2.204).toFixed(3)
    let kilogram = (num / 2.204).toFixed(3)
    massText.innerHTML = `${num} kilos = ${pound} pounds | ${num} pounds = ${kilogram} kilos`
}