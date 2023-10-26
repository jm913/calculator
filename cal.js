let string = "";
let buttons = document.querySelectorAll('.button');
let clearBtn = document.querySelector('.clsBack');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
clearBtn.addEventListener('click', () => {
    let arr = string.split("");
    arr.pop();
    string = arr.join("");
    document.querySelector('input').value = string;
})



// .....self...error 
// let input=document.getElementById('input');
// let buttons=document.querySelectorAll('.k'); 


// buttons.forEach((button)=>{
// button.addEventListener('click',(e)=>{
//     let num=e.target.textContent;
//     input.value=input.value+num;
// })
// })


// let allClear=document.querySelector('.all');
// allClear.addEventListener('click',()=>{
//  input.value ="";
// })

// let back=document.querySelector('.del');
// back.addEventListener('click',()=>{
// let arr=input.value;
// let res=arr.split("");
// res.pop();
// let newValue=res.join("");
// input.value=newValue;
// })