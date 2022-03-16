window.addEventListener('load', function(){
    let elBurger = document.querySelector('.header .burger');
    let elNav = document.querySelector('.sidebar')
    elBurger.onclick = function(){
        elNav.classList.toggle('active')
        elBurger.classList.toggle('active')
        
    }



})