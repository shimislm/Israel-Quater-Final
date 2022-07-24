
// Cities Change own code
let jerusalem, telaviv, eilat, deadsea, haifa, cities, cities_obj;
window.onload =  () => {
    jerusalem = document.querySelector('#jerusalem');
    telaviv = document.querySelector("#telaviv");
    eilat = document.querySelector("#eilat");
    deadsea = document.querySelector("#deadsea");
    haifa = document.querySelector("#haifa");
    cities = ['jerusalem', 'telaviv', 'eilat', 'deadsea', 'haifa'];
    cities_obj = [jerusalem, telaviv, eilat, deadsea, haifa];
    changeCities('jerusalem');
    declareButtons();
}

function changeCities(city) {
    for (let i = 0; i < cities.length; i++) {
        if (city == cities[i]) {
            cities_obj[i].style.display = 'flex';
        }
        else {
            cities_obj[i].style.display = 'none';
        }
    }
}
function declareButtons(){
    let jerusalem = document.querySelector("#btn_jerusalem")
    let telaviv = document.querySelector("#btn_telaviv")
    let haifa = document.querySelector("#btn_haifa")
    let deadsea = document.querySelector("#btn_deadsea")
    let eilat = document.querySelector("#btn_eilat")
    jerusalem.addEventListener("click", ()=>{
        changeCities("jerusalem")
    })
    telaviv.addEventListener("click", ()=>{
        changeCities("telaviv")
    })
    eilat.addEventListener("click", ()=>{
        changeCities("eilat")
    })
    haifa.addEventListener("click", ()=>{
        changeCities("haifa")
    })
    deadsea.addEventListener("click", ()=>{
        changeCities("deadsea")
    })
}



