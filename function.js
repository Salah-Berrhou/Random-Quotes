let getQuotes = function(){
    let quotesJSON = localStorage.getItem('quotes')
    if(quotesJSON !== null){
        return JSON.parse(quotesJSON)
    }else{
        return []
    }
}

let randomQuotes = function(quotes, randomIndex){

    document.querySelector('#quotes').innerHTML = ''

    let randomQuote = document.createElement('p')
    randomQuote.textContent = quotes[randomIndex].text
    document.querySelector('#quotes').appendChild(randomQuote)
}

let removeOneQuote = function(id){
    const quoteIndex = quotes.findIndex(function(quote){
        return quote.id === id
    })

    if (quoteIndex > -1){
        quotes.splice(quoteIndex, 1)
    }
}