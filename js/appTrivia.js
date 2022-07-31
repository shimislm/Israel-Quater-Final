let highScores = []
let trivia_data = [];
let countQuestions = 0
let avilablequestions = 10;
let score = 0
function init(){
    getApi();
}

async function getApi() {
    let url = "https://api.jsonbin.io/v3/b/62e390432c868775a53e51e0"
    axios.get(url,{
                headers : {
            "X-MASTER-KEY" : "$2b$10$fHTfBGKQqkHn4qzEujGIf.PDOAQJRb066Olppv6JmdyzLr3mwSpr2"
        }
    })
    .then(function (resp) {
        trivia_data = resp.data.record
        countQuestions = -1
        // console.log(trivia_data)
        score = 0;
        localStorage.setItem("correntScore", score)
        createTrivia();
    })
    .catch(function () {
        console.log("cannot find your data")
    })
}
    /** make the api request to get our data */
const createTrivia = ()=>{
    countQuestions++;
    document.querySelector("#id_score").innerHTML= `${countQuestions +1} of ${avilablequestions}`;
    document.querySelector("#progressBarFull").style.width = `${(countQuestions/10)*100}%`;
    document.querySelector("#id_main").innerHTML="";
    let rnd = Math.floor(Math.random()*trivia_data.length)
    
    if(countQuestions < avilablequestions ){
       let el = new TriviaClass("#id_main", trivia_data, rnd);
        el.render()
        trivia_data.splice(rnd,1)
    }
    else{
        setTimeout(function () {
            window.open( "endGame.html" , "_self")
        }, 2000);
    }
}
init()
