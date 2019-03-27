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
    randomQuote.textContent = quotes[randomIndex]
    document.querySelector('#quotes').appendChild(randomQuote)
}
