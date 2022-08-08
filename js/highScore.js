let scoresArr = JSON.parse(localStorage["highScores"])
scoresArr = _.sortBy(scoresArr , "score");
scoresArr.splice(10)


function init(){
    updateUi();
    // console.log(scoresArr[0].name);
}

const updateUi = () =>{
    
    console.log(scoresArr)
scoresArr.forEach(item => {
    let newScore = new Scores("#id_item" , item.name , item.score);
    newScore.render();
});
}

init();