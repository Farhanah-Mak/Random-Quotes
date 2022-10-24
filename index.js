const button= document.querySelector('.btn')
const quote= document.querySelector('.quote')
const author= document.querySelector('.author')
const body= document.querySelector('body')

const url= 'https://type.fit/api/quotes'

let getQuote= ()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
            quote.classList.remove('fade')
            author.classList.remove('fade')
            button.classList.remove('fade')
            let random= (Math.ceil(Math.random()* data.length))
            quote.textContent= data[random].text
            author.textContent= data[random].author
            quote.classList.add('fade')
            author.classList.add('fade')
            button.classList.add('fade')
    })
        
}
button.addEventListener('click', ()=>{
    getQuote()
    changeBackground()
})
function changeBackground(){
    let colour= colorGenerator()
    body.style.background= colour
    author.style.color= colour
    quote.style.color= colour
    button.style.background= colour
}
function colorGenerator(){
    let color= ''
    let random
    const char= 'abcdef123456789'
    for(let i=0;i<6;i++){
          random= Math.ceil(Math.random()* char.length)
          color += char.substring(random, random+1)
    }
    return '#'+ color
}