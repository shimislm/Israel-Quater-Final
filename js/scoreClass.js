class Scores{
    constructor(_name ){
        this.name = _name.value;
        this.score = localStorage.getItem("correntScore")
        alert(this.name)
    }
    render(){

    }

}