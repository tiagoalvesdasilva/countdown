let dias = document.getElementById("dias")
let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`janeiro 01 ${nextYear} 00:00:00`)

function UpdateCountdown (){
    const currentTime = new Date()
    const diference = newYearTime - currentTime
    const days = Math.floor(diference/1000/60/60/24)
    const hours = Math.floor(diference/1000/60/60) % 24
    const minutes = Math.floor(diference/1000/60) % 60
    const seconds = Math.floor(diference/1000) % 60
    
    dias.textContent = days < 10 ? '0' + days : days
    horas.textContent = hours < 10 ? '0' + hours : hours
    minutos.textContent = minutes < 10 ? '0' + minutes : minutes
    segundos.textContent = seconds < 10 ? '0' + seconds : seconds
}


setInterval(UpdateCountdown, 1000)