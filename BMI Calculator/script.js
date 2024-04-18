
let calc_btn = document.querySelector("#calc")

calc_btn.addEventListener('click',calculateBmi)

function calculateBmi()
{
    let bmi_value = document.querySelector('.bmi-value')
    let final = document.querySelector('.output-Sen')
    let weight_field = document.querySelector("#weight")
    let height_field = document.querySelector("#height")
    
    let weight = parseFloat(weight_field.value)
    let height = parseFloat(height_field.value)

    let bmi = 0

    bmi_value.innerText = ''
    final.innerText = ''

   console.log( isNaN(height))
   console.log(isNaN(weight))
    

    if(isNaN(weight)||isNaN(height))
        alert("Please enter a valid number")

    else
    {
        bmi = weight/(height*height)
        bmi_value.innerText = `Your BMI Value is ${bmi.toFixed(2)}`
        decideState(bmi)
    }
       
    
    function decideState(bmi)
    {
        if(bmi < 18.5)
        final.innerText = "You are Under Weight"

        else if(bmi>= 18.5 && bmi<=24.9)
            final.innerText = "You have a Heathly Weight"

        else if(bmi>= 25 && bmi<=29.9)
            final.innerText = "You are Over Weight"

        else
            final.innerText = "You are Obese"
    }

    
    weight_field.value = ''
    height_field.value = ''

}

