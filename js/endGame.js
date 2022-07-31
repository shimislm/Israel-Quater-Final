let highScores = []
function init(){
    checkLocal()
    declareEvents()
}
const checkLocal = () =>{
    if(localStorage["highScores"]){
        highScores = JSON.parse(localStorage["highScores"])
    }
}
const declareEvents = () =>{
    let score = document.querySelector("#id_score")
    score.innerHTML = `${(localStorage["correntScore"]/10)*100}%`
    let name = document.querySelector("#id_input")
    let saveBtn = document.querySelector("#id_form");
    // console.log(name
    saveBtn.addEventListener("submit" , (e) =>{
        e.preventDefault();
        let newScore = new Scores(name);
        highScores.push(newScore);
        localStorage.setItem("highScores" , JSON.stringify(highScores))
        console.log(highScores)
        highScores.splice(10)
        setTimeout(function () {
            window.open( "Trivia.html" , "_self")
        }, 2000);
    })
}
init()