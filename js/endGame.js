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
    let itemscore = document.querySelector("#id_score")
    itemscore.innerHTML = `${(localStorage["correntScore"]/10)*100}%`
    const name = document.querySelector("#id_input")
    let saveBtn = document.querySelector("#id_form");
    saveBtn.addEventListener("submit" , (e) =>{
        e.preventDefault();
        let correntScore = localStorage.getItem("correntScore")
        let newScore = new Scores("" , name.value , correntScore);
        highScores.push(newScore);
        highScores = _.reverse(_.sortBy(highScores , "score"));
        // highScores.pop()
        localStorage.setItem("highScores" , JSON.stringify(highScores))
        setTimeout(function () {
            window.open( "Trivia.html" , "_self")
        }, 1000);
    })
}


init()