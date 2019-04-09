let quotes = getQuotes()


//render quotes in the white box

quotesRender(quotes, filters)


// random button activited
document.querySelector('#random').addEventListener('click', function(){
    //cheack if the user cheacked so quote to generate if not show all
    let trueQuote = quotes.filter(quote => quote.pressed === true)
    let cheackedQuotes = quotes.filter(function(quote){
        if(trueQuote.length >= 1){
            return quote.pressed === true
         }else{
            return quote.pressed === false
        }
    })
    let randomIndex = Math.floor(Math.random() * (cheackedQuotes.length - 0) + 0)
    getQuotes()
    randomQuotes(cheackedQuotes, randomIndex)
})

// submit and get the new quote
document.querySelector('#submit-quote').addEventListener('submit', function(e){
    e.preventDefault()
    quotes.push({
        text: e.target.elements.quoteText.value,
        id: quotes.length + 1,
        pressed: false
    })
    saveQuotes()
    e.target.elements.quoteText.value = ''
    quotesRender(quotes, filters)
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

document.querySelector('#filterInput').addEventListener('input', function(e){
    filters.searchText = e.target.value
    quotesRender(quotes, filters)
})

