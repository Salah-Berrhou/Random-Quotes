let quotes = getQuotes()



const quotesRender = function(quotes){

    document.querySelector('#quotesList').innerHTML = ''

    quotes.forEach(function(quote){
        let quoteBox = document.createElement('div')
        let quoteEl = document.createElement('p')
        let removeQuote = document.createElement('button')

        quoteEl.textContent = quote.text
        quoteBox.appendChild(quoteEl)

        removeQuote.textContent = 'x'
        removeQuote.setAttribute('id', '#remove-quote')
        removeQuote.addEventListener('click', function(){
            removeOneQuote(quote.id)
            localStorage.setItem('quotes', JSON.stringify(quotes))
            quotesRender(quotes)
        })
        quoteBox.appendChild(removeQuote)

        return document.querySelector('#quotesList').appendChild(quoteBox)
    })
}

quotesRender(quotes)


document.querySelector('#random').addEventListener('click', function(){
    let randomIndex = Math.floor(Math.random() * (quotes.length - 0) + 0)
    console.log(randomIndex)
    getQuotes()
    randomQuotes(quotes, randomIndex)
})

document.querySelector('#submit-quote').addEventListener('submit', function(e){
    e.preventDefault()

    quotes.push({
        text: e.target.elements.quoteText.value,
        id: quotes.length + 1
    })

    localStorage.setItem('quotes', JSON.stringify(quotes))

    e.target.elements.quoteText.value = ''
    
    quotesRender(quotes)
})

let removeAll = function(quotes){
    localStorage.removeItem('quotes')
}

document.querySelector('#remove').addEventListener('click', function(){
    removeAll(quotes)
    location.assign('index.html')
    // document.querySelector('#quotes').innerHTML = ''
    // document.querySelector('#quotesList').innerHTML = ''
})


