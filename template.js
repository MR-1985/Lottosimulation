function additionCostTemplate() {
    return `The cost of the lottery ticket is 2.10€.<br>        
The cost of the lottery ticket for ${count} draws is: ${(2.10 * count).toFixed(2)}€ for just one Draw a week<br>`
}