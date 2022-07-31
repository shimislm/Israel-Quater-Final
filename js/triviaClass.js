class TriviaClass{
    constructor(_parent,_item , _index){
        this.index= _index;
        this.parent = _parent;
        this.question = _item[this.index].question;
        this.answers = _item[this.index].answers 
        // console.log(this.item)
    }
    render(){
        let answersArr = shuffle(this.answers)
        let h2 = document.createElement("h2")
        h2.className = "display-5"
        h2.style.color="rgb(20, 101, 252)"
        document.querySelector(this.parent).append(h2)
        h2.innerHTML = `${this.question}`
        let div = document.createElement("div")
        div.className ="row justify-content-around w-50 mt-5"
        div.innerHTML = `
        <button id="id_btn1" class="col-lg-5 btn btn-info btn-lg mb-2">${answersArr[0].a}</button>
        <button id="id_btn2" class="col-lg-5 btn btn-info btn-lg mb-2">${answersArr[1].a}</button>
        <button id="id_btn3" class="col-lg-5 btn btn-info btn-lg mb-2">${answersArr[2].a}</button>
        <button id="id_btn4" class="col-lg-5 btn btn-info btn-lg mb-2">${answersArr[3].a}</button>
        `
        document.querySelector(this.parent).append(div)
        let ans_ar = [answersArr[0], answersArr[1], answersArr[2], answersArr[3]];
        let btns_ar = [document.querySelector("#id_btn1"), document.querySelector("#id_btn2"), document.querySelector("#id_btn3"), document.querySelector("#id_btn4")];
        let flag = false;
        btns_ar.forEach((e, index)=> {
            e.addEventListener("click" , function(){
                if(!flag){
                    flag= true;
                    e.style.background = "red";
                    if(ans_ar[index].check== "true"){
                        e.style.background = "green"
                        score++;
                        localStorage.setItem("correntScore", score)
                        setTimeout(function () {
                            createTrivia()
                        }, 2000);
                    }
                    else{
                        e.style.background = "red"
                        setTimeout(function () {
                            createTrivia()
                        }, 2000);
                    }
                }

            })
        });
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
