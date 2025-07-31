const playerNumbers = [1, 2, 3, 4, 5, 6];
let randomNumbers = [];
let wertzuio = [];

const max = 49;
const min = 1;
let count = 0;

createRandomNumbers();

checkIfMillionär();

function createRandomNumbers() {
    while (randomNumbers.length < 6) {
        const randomNumber = Math.floor((Math.random()) * (max - min + 1) + min);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
            
            randomNumbers.sort((a, b) => a - b)
        } else {
            wertzuio.push(randomNumber)
            
            console.log(wertzuio);
        }
        
    }
    
}
console.log(wertzuio);
console.log(randomNumbers);
console.log("Versuche = ",count)

function checkIfMillionär() {
    count++
    return
}