function init() {
    createHeader();
    createFooter();
}
let lottoTicketNumbers = [];

const max = 49;
const min = 1;

let count = 0;
let drawnNumbers = [];
let jackpot = false;

function handleCreateLottoTicketNumbers(event) {
    event.preventDefault();
    clearAll();
    if (!createLottoTicketNumbers()) return;
    checkIfMillionär();
    showResult();

    console.log(`Draw ${count}: resulted in a jackpot with the numbers ${drawnNumbers}!`);
    console.log(lottoTicketNumbers);
    console.log(`It took ${count} draws until the lottery ticket numbers were drawn.`);
}

function createLottoTicketNumbers() {
    for (let i = 1; i <= 6; i++) {
        const value = parseInt(document.getElementById(`number${i}`).value);
        if (isNaN(value) || value < min || value > max) {
            alert(`Invalid value in field ${i}: Please enter a number between ${min} & ${max}.`);
            return false;
        }
        if (lottoTicketNumbers.includes(value)) {
            alert(`Duplicate number in field ${i}: ${value}. Please use each number only once.`);
            return false;
        }
        (lottoTicketNumbers).push(value);
    }
    return true;
}

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
    while (!jackpot) {
        drawnNumbers = createRandomNumbers();
        count++
        jackpot = lottoTicketNumbers.every(zahl => drawnNumbers.includes(zahl));
    }
};

function clearAll() {
    lottoTicketNumbers = [];
    count = 0;
    drawnNumbers = [];
    jackpot = false;
}

function showResult() {
    document.getElementById("resultText").innerHTML =
    `Jackpot after ${count} draws!<br>
    Your numbers: ${lottoTicketNumbers.join(", ")}<br>
    Drawn numbers: ${drawnNumbers.sort((a, b) => a - b).join(", ")}`;
    document.getElementById("additionCost").innerHTML = additionCostTemplate();
    document.getElementById("resultContainer").classList.remove("d-none");
    document.getElementById("lottoTicketNumbersInput").classList.add("d-none");
    document.getElementById("underTitleStartOne").classList.add("d-none");
    document.getElementById("underTitleStartTwo").classList.add("d-none");
    document.getElementById("underTitleResult").classList.remove("d-none");
    document.getElementById("reloadButton").classList.remove("d-none");
    document.getElementById("moreWorthButton").classList.remove("d-none");
}

function pushMoreWorthButton() {
    document.getElementById("btcText").classList.remove("d-none");
}

function reloadPage() {
    window.location.replace(window.location.href);
}