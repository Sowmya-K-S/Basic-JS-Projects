let top_part = document.querySelector(".top")
let bottom_part = document.querySelector(".bottom")

let body = document.querySelector('body')

top_part.addEventListener('click',function(e)
{
    body.style.backgroundColor = e.target.id;
})

bottom_part.addEventListener('click',function(e)
{
    body.style.backgroundColor = e.target.id;
})