// document.getElementById('test').style.color = 'green'


// var titles = document.getElementsByTagName('h1')
// console.log(titles)
// titles[0].style.color = 'blue'

// var para = document.getElementsByClassName('par')
// console.log(para)

// var divM = document.getElementById('main')
// console.log(divM)

// var para = document.querySelector('p')
// console.log(para)

// var para = document.querySelectorAll('p')
// console.log(para)

// var divM = document.querySelector('#main')
// console.log(divM)

// var paraAll = document.querySelectorAll('.par')
// console.log(paraAll)

// var divM = document.getElementById('main')
// console.log(divM.firstElementChild)
// console.log(divM.lastElementChild)
// var premP = document.querySelector('.par')
// console.log(premP.previousElementSibling)
// console.log(premP.nextElementSibling)
// console.log(premP.parentElement)

// var divM = document.querySelector('#main')
// console.log(divM.innerHTML)
// console.log(divM.innerText)



// var divM = document.querySelector('#main')
// var title = document.querySelector('h1')
// var mamino = document.createElement('button')

// mamino.innerText = 'Aziz'

// divM.appendChild(mamino)

// divM.insertBefore(mamino,title.nextElementSibling)

// var title = document.querySelector('h1')

// title.setAttribute('class','raslen')

// function HelloAziz(){
//     return alert('Hello si Aziz')
// }

// var btnPlus = document.querySelector('.btnPlus')

// btnPlus.addEventListener('click',function(){
//     btnPlus.previousElementSibling.innerText++
// })

// var btnMoins = document.querySelector('.btnMoins')

// btnMoins.addEventListener('click',function(){
//     if(btnMoins.nextElementSibling.innerText>0){
//         btnMoins.nextElementSibling.innerText--
//     }    
// })

var btnsPlus = document.querySelectorAll('.btnPlus')

// console.log(btnsPlus)

for (let i = 0; i < btnsPlus.length; i++) {
   btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
   })
    
}

var btnsMoins = document.querySelectorAll('.btnMoins')

for (let i = 0; i < btnsMoins.length; i++) {
    btnsMoins[i].addEventListener('click',function(){
        if (btnsMoins[i].nextElementSibling.innerText>0) {
            btnsMoins[i].nextElementSibling.innerText--
        }
    })
    
}


// var divM = document.querySelector('#main')
// divM.remove()