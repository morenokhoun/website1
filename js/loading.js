loadText = document.querySelector('.loading-text')
bg = document.quertSelector('.bg')

load = 0

int = setInterval(blurring, 30)


function blurring() {
    load++

    if (loadn > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100

    bg.style.filter = `blur(${30-(load/100)*30}px)`
}
