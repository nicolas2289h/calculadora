const darkBtn = document.getElementById('dark-btn')
const container = document.getElementById('container')
const botonera = document.getElementById('botonera')
const buttons = document.querySelectorAll('button')
const display = document.getElementById('display')
const borrarBtn = document.getElementById('borrar')
// operaciones
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const producto = document.getElementById('producto')
const division = document.getElementById('division')

darkBtn.addEventListener('click',()=>{
    container.classList.toggle('oscuro')
    botonera.classList.toggle('oscuro-botonera')
    container.style = 'transition: 600ms'
    botonera.style = 'transition: 600ms'
})


buttons.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.id === 'borrar'){
            display.innerText = ''
        }else if(item.id === 'backspace'){
            let string = display.innerText
            display.innerText = string.substring(0,string.length - 1)
        }else if(item.id === 'igual' && display.innerText !== ''){
            try {
                display.innerText = eval(display.innerText)
            } catch (error) {
                alert('Falta un operador')
            }
        }else if(item.id === 'igual' && display.innerText == ''){
            display.innerText = 'Null'
            setTimeout(() => {
                display.innerText = ''
            }, 1200);
        }else{
            display.innerText += item.textContent
        }
    })
})

