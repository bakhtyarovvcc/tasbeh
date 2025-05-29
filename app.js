let screen=document.querySelector('.screen')
let res=document.querySelector('.res')
let incr=document.querySelector('.incr')
let count=0
screen.innerHTML=count
function increment(){
    count++
    screen.innerHTML=count
}
function restart(){
    count=0
    screen.innerHTML=count
}
