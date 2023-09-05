// new code of javascript

let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})












// old code of javascript
// function addToResult(value)
// {
//     document.getElementById('result').value+= value;
// }

// function clearResult(){
//     document.getElementById('result').value = '';
// }
// function calculateResult(){
//     document.getElementById('result').value = eval(document.getElementById('result').value);
// }