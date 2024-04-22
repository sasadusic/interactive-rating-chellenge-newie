const levels = document.querySelectorAll('.level')
const btn = document.querySelector('.btn')
const levSpan = document.querySelector('.lev-span')
const card = document.querySelector('.card')
const message = document.querySelector('.message')
let lev = 0

levels.forEach(level => {
    level.onclick = () => {
        levels.forEach(l => {
            l.classList.remove('active-level')
        })
        level.classList.add('active-level')
        lev = level.dataset.level
        // alert(lev)
    }
})

btn.onclick = () =>{
    if(lev !== 0){
        levSpan.innerText = lev
        card.style.display = 'none'
        message.style.display = 'flex'
    }
}