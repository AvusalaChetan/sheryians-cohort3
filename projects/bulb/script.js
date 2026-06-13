const bulb = document.querySelector('.bulb')
 
const btn = document.querySelector('button')

btn.addEventListener('click',(e)=>{
    let isON =bulb.classList.toggle('action')
    if(isON) btn.innerText = 'OFF'
    else btn.innerText = 'ON'
    
})