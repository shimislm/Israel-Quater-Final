let counter = 1 ;
let timer;
window.onload = () =>{
    declareEvents()
    bannerS()
}
function bannerS(){
    bannerLeft();
    bannerRight();
}
 
function declareEvents(){ 
    timer = setInterval(checked, 4000);
}
function checked(){
    let radioBtn = document.querySelector(`#s${counter}`)
        radioBtn.checked = 'true';
        counter++;
        if(counter>=6){
            counter = 1; 
        }
}