let incr=document.getElementById("inc")
let decr=document.getElementById("dec")
let rese=document.getElementById("res")
let text=document.getElementById("tex")
    
    
function reset()
{
    text.innerText= 0;
}

function increment()
{
    let value=Number(text.innerText)
    if(value<10)
        text.innerText = value+1
    else
        alert("Number cannot exceed 10")
                    
}
function decrement()
{
    let value=Number(text.innerText)
    if(value>0)
        text.innerText = value-1
    else
        alert("Number cannot recede 0")
}

    
rese.addEventListener("click",reset)
incr.addEventListener("click",increment)
decr.addEventListener("click",decrement)
                