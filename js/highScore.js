let scoresArr = JSON.parse(localStorage["highScores"])
scoresArr.splice(10)


function init(){
    updateUi();
    // console.log(scoresArr[0].name);
}

const updateUi = () =>{
    scoresArr = _.reverse(_.sortBy(scoresArr , "score"));
    console.log(scoresArr)
scoresArr.forEach(item => {
    let newScore = new Scores("#id_item" , item.name , item.score);
    newScore.render();
});
}

init();