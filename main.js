let quotes = getQuotes()


//render quotes in the white box
const quotesRender = function(quotes){
    document.querySelector('#quotesList').innerHTML = ''
    quotes.forEach(function(quote){
       quoteBox(quote)
    })
}

quotesRender(quotes)

// random button activited
document.querySelector('#random').addEventListener('click', function(){
    let randomIndex = Math.floor(Math.random() * (quotes.length - 0) + 0)
    console.log(randomIndex)
    getQuotes()
    randomQuotes(quotes, randomIndex)
})

// submit and get the new quote
document.querySelector('#submit-quote').addEventListener('submit', function(e){
    e.preventDefault()
    quotes.push({
        text: e.target.elements.quoteText.value,
        id: quotes.length + 1
    })
    saveQuotes()
    e.target.elements.quoteText.value = ''
    quotesRender(quotes)
})

//remove all quotes
let removeAll = function(quotes){
    localStorage.removeItem('quotes')
}

// remove one specific quote
document.querySelector('#remove').addEventListener('click', function(){
    removeAll(quotes)
    location.assign('index.html')
    // document.querySelector('#quotes').innerHTML = ''
    // document.querySelector('#quotesList').innerHTML = ''
})


