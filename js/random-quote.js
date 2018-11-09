const quotePool = ['our goblin engineers are currently on vacation. Consider trying later', 'Are you sure, you\'re a tauren?', 'Thx for your interest. We\'re currently at war with the alliance, pls come back later'];

let currentQuote = ''

function randomQuote() {
    const pickOne = Math.floor(Math.random() * (quotePool.length));
    if (quotePool[pickOne] === currentQuote) {
        randomQuote()
    } else {
        document.getElementById('fun-output').innerHTML = quotePool[pickOne];
        currentQuote = quotePool[pickOne];
    }
}