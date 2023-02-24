let sec = 0
let min = 0
let ms = 0
let timer
let res = document.getElementById('tela')
let paused = false

function inicia(){
    timer = setInterval(tela,10)
    
}

function pausa(){
    clearInterval(timer)
   
}

function para(){
    clearInterval(timer)
    sec = 0
    min = 0
    ms = 0
    res.innerHTML = '00 : 00 : 00'
}  

function tela(){
    ms += 10
    if (ms == 1000){
        ms = 0
        sec++
    }
    if(sec==60){
        min++
        sec = 0
    }
    res.innerHTML = formata(min) + ' : ' + formata(sec) + ' : ' + formata(ms)
}

function formata(time){
    if (time<10){
        return `0${time}`
    }else{
        return time
    }
}