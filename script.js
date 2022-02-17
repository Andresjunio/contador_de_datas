const dia = "4 May 2022"
const d = document.getElementById('d')
const h = document.getElementById('h')
const m = document.getElementById('m')
const s = document.getElementById('s')



function contador(){

    
    const diaAtual = new Date()
    const diaFinal = new Date(dia)


    const totalSegundos = Math.floor(diaFinal - diaAtual) / 1000

    const dias = Math.floor((totalSegundos / 3600) / 24)
    const horas = Math.floor(totalSegundos/3600) % 24 
    const minutos = Math.floor(totalSegundos/60) % 60
    const segundos = Math.floor(totalSegundos) % 60

    d.innerHTML = dias
    h.innerHTML = horas
    m.innerHTML = minutos
    s.innerHTML = segundos

    if (segundos < 10){
        s.innerHTML = "0" + segundos 
    }
    if (horas < 10){
        h.innerHTML = "0" + horas 
    }
    
}


contador()
setInterval(contador, 1000)

