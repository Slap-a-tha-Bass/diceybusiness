// create object
let container = document.getElementById('container');
class Die {
    //  define the constructor
    constructor() {
        this.rendor();
        this.roll();
        this.btnClicks();
    }
    
    // define the method
    roll() {
        this.value = Math.ceil(Math.random()*6);
        this.div.textContent = this.value;
    }
    btnClicks() {
        // click on die function
        this.div.addEventListener('click', () => this.roll());
        // remove on dblclick
        this.div.addEventListener('dblclick', () => {
            let spliceOut = dice.indexOf(this);
            dice.splice(spliceOut, 1)
            this.div.remove();
        })
    }
    rendor(){
        this.div = document.createElement('div');
        this.div.classList.add('sum');
        container.appendChild(this.div);
    }
}
let dice = [];
let sum = 0;
// genbtn function
let genbtn = document.getElementById('genbtn');
genbtn.addEventListener('click', () => {
    let newDie = new Die();
    dice.push(newDie);

})
// rerollbtn click function
let rerollbtn = document.getElementById('rerollbtn');
rerollbtn.addEventListener('click', () => {
    dice.forEach((die) => {
        sum = 0;
        die.roll();
    }) 

})
// sumbtn click function
let sumbtn = document.getElementById('sumbtn');
sumbtn.addEventListener('click', () => {
    dice.forEach((die) => {
        sum += die.value;
    });
    alert(sum);
    return sum = 0;
})


