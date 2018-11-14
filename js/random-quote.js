const pool = ['Our goblin engineers are currently on vacation. Consider trying later.', 'Are you sure, you\'re a tauren?', 'Thanks for your interest. We\'re currently at war with the Alliance, pls come back later.', 'Sorry, what were you saying?', 'Woah! You must be desperate if you want to use our app!', 'You no take candle!', 'Please send your complaints to Thunder Bluff. The postman visits us every three months, or so.', 'You can eat and drink at the same time.', 'Consider showering before meeting up with another tauren.', 'Meet a mountain of meat they said...', 'Tauren druids will hug you like a bear.', 'If you want to bring some flowers, pick the nice ones.', 'You clicked me, are you happy now?', 'Mooooo! Emm... I meant, hi!', 'If you\'re a shaman, you can use Far Sight to look up your date.', 'The barber in Orgrimmar has a special deal for our members. Nothings beats clean, shiny horns!'];

//below is the shuffle array setup
let i = pool.length, j, temp;
while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = pool[j];
    pool[j] = pool[i];
    pool[i] = temp;
};
//Set up + function that goes throug the array in 'pool'
let myIndex = 0;
let display = document.getElementById('fun-output');

function newQuote() {
    display.innerHTML = pool[myIndex];
    myIndex = (myIndex + 1)%(pool.length);
};
    