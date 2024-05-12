let scroll = document.querySelector(".scroll");

window.addEventListener(`scroll`, function(){
    let height = document.documentElement.scrollHeight;
    let clientheight = document.documentElement.clientHeight;
    let fromtop = document.documentElement.scrollTop;
    let subheight = height - clientheight;
    let result = Math.round(fromtop * 100 / subheight);
    scroll.style.width = `${result}%`;
    console.log(result)
})
