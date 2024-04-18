
function generateColor()
{
    let hex = "0123456789ABCDEF"

    let color = "#"

    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }

    return color;
}

let interval;
let heading = document.querySelector(".heading")
function ChangeBG()
{
    
    interval = setInterval(function(){
        let body = document.querySelector('body')
        body.style.backgroundColor = generateColor()
    },1000)

    heading.innerHTML = ""
    heading.innerHTML = "<h1>Click on stop to freeze changing the background color</h1>"

}

function stopChanging()
{
    heading.innerHTML = ""
    heading.innerHTML = "<h1>Click on start to resume changing the background color</h1>"

    clearInterval(interval)
    interval = null
}

let start_btn = document.querySelector("#start-btn")
let stop_btn = document.querySelector("#stop-btn")

start_btn.addEventListener('click',ChangeBG)
stop_btn.addEventListener('click',stopChanging)

