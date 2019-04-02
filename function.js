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
let randomQuotes = function(cheackedQuotes, randomIndex){

    document.querySelector('#quotes').innerHTML = ''

    let randomQuote = document.createElement('p')
    randomQuote.textContent = cheackedQuotes[randomIndex].text
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
    let checkBox = document.createElement('input')
    
    // cheack box and thier value
    checkBox.setAttribute('id', 'checkboxes')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = quote.pressed
    checkBox.addEventListener('change', (e) => {
        quote.pressed = e.target.checked
        saveQuotes()
        quotesRender(quotes, filters)
    })
    quoteBox.appendChild(checkBox)
    //quote value
    quoteEl.textContent = quote.text
    quoteBox.appendChild(quoteEl)
    //remove quote function
    removeQuote.textContent = 'x'
    removeQuote.setAttribute('id', '#remove-quote')
    removeQuote.addEventListener('click', function(){
        removeOneQuote(quote.id)
        saveQuotes()
        quotesRender(quotes)
    })
    quoteBox.appendChild(removeQuote)
    //return the component
    return document.querySelector('#quotesList').appendChild(quoteBox)
}

const quotesRender = function(quotes, filters){
    
    const filterdQuotes = quotes.filter(quote => quote.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector('#quotesList').innerHTML = ''

    filterdQuotes.forEach(function(quote){
       quoteBox(quote)
    })
}