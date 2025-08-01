const playerNumbers = [1, 2, 3, 4, 5, 6];
playerNumbers.sort((a, b) => a - b);
let randomNumbers = [];
let checkedLength = "";

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
        }
    }
};

console.log(randomNumbers);

function checkIfMillionär() {
    if (randomNumbers.length === playerNumbers.length) {
        for (let i = 0; i < playerNumbers.length; i++) {
            if (playerNumbers[i] !== randomNumbers[i]) {
                count++
                checkIfMillionär();
            }else{
                console.log("Won")
                console.log(count)  
            }
        }
    }
};