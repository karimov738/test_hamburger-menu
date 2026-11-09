
let btn = document.querySelector('.sign')
let ul = document.querySelector('nav ul')

btn.addEventListener('click', function () {
    // if (ul.classList.contains('active')) {
    //     ul.classList.remove('active')
    // } else {                             //// das is long versionen
    //     ul.classList.add('active')
    // }
   
    ul.classList.toggle('active')       //// das is short versionen
 
})