class Scores{
    constructor(_parent ,_name , _score){
        this.parent = _parent
        this.name = _name;
        this.score = _score
        
    }
    render(){
        let div = document.createElement("div")
        div.className= "row rounded-pill bg-white mb-2 py-3 px-0 mx-0 text-primary mb-1 p-0 w-100 mx-0"
        div.innerHTML = `                    
        <h5 class="col-6">${this.name}</h5>
        <h5 class="col-6">${this.score}</h5>`
        document.querySelector(this.parent).append(div);
    }
}
