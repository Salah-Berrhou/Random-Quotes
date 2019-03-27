let quotes = getQuotes()

const quotesRender = function(quotes){

    document.querySelector('#quotesList').innerHTML = ''

    quotes.forEach(function(quote){
        let quoteEl = document.createElement('p')
        quoteEl.textContent = quote
        return document.querySelector('#quotesList').appendChild(quoteEl)
    })
}

quotesRender(quotes)


document.querySelector('#random').addEventListener('click', function(){
    let randomIndex = Math.floor(Math.random() * (quotes.length - 0) + 0)
    console.log(randomIndex)
    randomQuotes(quotes, randomIndex)
})

document.querySelector('#submit-quote').addEventListener('submit', function(e){
    e.preventDefault()

    quotes.push(e.target.elements.quoteText.value,)

    localStorage.setItem('quotes', JSON.stringify(quotes))

    e.target.elements.quoteText.value = ''
    
    quotesRender(quotes)
})

let removeAll = function(quotes){
    localStorage.clear('quotes')
    document.querySelector('#quotes').innerHTML = ''
}

document.querySelector('#remove').addEventListener('click', function(){
    removeAll(quotes)
    document.querySelector('#quotesList').innerHTML = ''
})

