const nav=document.querySelector('.nav');

window.addEventListener('scroll',fixNav)

function fixNav(){
    if(window.scrollY>=600){

    console.log('agregaste la clase active');
    nav.classList.add('active');

    } else{

    console.log('quitaste la clase active');
    nav.classList.remove('active');

    }   
    console.log(window.scrollY);
}
const button = document.querySelector('.button');
window.addEventListener('scroll',irArriba)
function irArriba(){
    if(window.scrollY >=100){
    console.log('Imprimira el mansaje que entraste al if');
    button.style.display="block";
    }else{
    button.style.display="none";
    }
}
function scrollToTop(){
    if(button.onclick){
        window.scrollTo(0,0)
    }
}