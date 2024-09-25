
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;


app.use(morgan('dev'));

// Dummy Route
app.get('/', (req, res) => {
    return res.send(`<h1>Just the first page!</h1>`)
}); //Using the return isn't necisary but it does ensure that nothing else is
    //being done after the response has been sent. Good practice.


// Task 1
app.get('/greetings/:name', (req, res) => {
    const username = req.params.name
    return res.send(`<h1>Long time no see ${req.params.name}!</h1>`)
}); //Using the return isn't necisary but it does ensure that nothing else is
    //being done after the response has been sent. Good practice.
 
// Task 2

app.get('/roll/:number', (req, res) => {
    // res.send('roll dice')
    const number = Number(req.params.number);
    
    // check the type of the num is a number
    //  If it is not a number, return an error response
    if(isNaN(number)){
        return res.send('You must specify a number.')
    }else{
    // If it is a number return a random whole number between 0 and given number
    const randomNum = Math.floor(Math.random() * number)
    return res.send(`You rolled a ${randomNum}.`)
    }
})

// Task 3

app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];
    const index = parseInt(req.params.index);
    const foundItem = collectibles[index]
    if(!foundItem){
        // If index is out of range return an error response
        return res.send('This item is not yet in stock. Check back soon!')
    } else {
        return res.send(`So, you want the ${foundItem.name}? For ${foundItem.price}, it can be yours!`)
    }
})


// Task 4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


// Listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


