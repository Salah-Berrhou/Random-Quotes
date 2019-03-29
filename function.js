let getQuotes = function(){
    let quotesJSON = localStorage.getItem('quotes')
    if(quotesJSON !== null){
        return JSON.parse(quotesJSON)
    }else{
        return []
    }
}

let saveQuotes = function(){
    localStorage.setItem('quotes', JSON.stringify(quotes))
}
// generate random quote
let randomQuotes = function(quotes, randomIndex){

    document.querySelector('#quotes').innerHTML = ''

    let randomQuote = document.createElement('p')
    randomQuote.textContent = quotes[randomIndex].text
    document.querySelector('#quotes').appendChild(randomQuote)
}

// remove quote
let removeOneQuote = function(id){
    const quoteIndex = quotes.findIndex(function(quote){
        return quote.id === id
    })

    if (quoteIndex > -1){
        quotes.splice(quoteIndex, 1)
    }
}

// generate quotebox 
let quoteBox = function(quote){
    let quoteBox = document.createElement('div')
    let quoteEl = document.createElement('p')
    let removeQuote = document.createElement('button')

    quoteEl.textContent = quote.text
    quoteBox.appendChild(quoteEl)

    removeQuote.textContent = 'x'
    removeQuote.setAttribute('id', '#remove-quote')
    removeQuote.addEventListener('click', function(){
        removeOneQuote(quote.id)
        saveQuotes()
        quotesRender(quotes)
    })
    quoteBox.appendChild(removeQuote)

    return document.querySelector('#quotesList').appendChild(quoteBox)
}