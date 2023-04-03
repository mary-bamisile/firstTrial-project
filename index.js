let myButton = document.querySelector(".btn");


const btnVisibility = () => {

    if(window.scrollY > 700){
        myButton.style.visibility = 'visible'
    }
    else{myButton.style.visibility = "hidden"
}


};
document.addEventListener('scroll', () => {
    btnVisibility();
});

myButton.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:"smooth"});
});