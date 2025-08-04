const lottoTicketNumbers = [45, 22, 13, 4, 35, 26];

const max = 49;
const min = 1;

let count = 0;
let drawnNumbers=[];
let jackpot = false;

function createRandomNumbers() {
    let lottoNumbers = []
    while (lottoNumbers.length < 6) {
        const randomNumber = Math.floor((Math.random()) * (max - min + 1) + min);
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }
    return lottoNumbers;
};

function checkIfMillionär() {
    while(!jackpot){
drawnNumbers = createRandomNumbers();
count++
jackpot = lottoTicketNumbers.every(zahl=>drawnNumbers.includes(zahl));
    }
};

checkIfMillionär();
console.log(`Versuch ${count}: führte mit den Zahlen, ${drawnNumbers}, zum Jackpot!`);

console.log(count);
console.log(drawnNumbers);
console.log(lottoTicketNumbers);