const buttons = document.querySelectorAll('button');
const headings = document.querySelectorAll('h1');
for(let btn of buttons){
    btn.addEventListener('click',function(){
        btn.style.backgroundColor = randomColorGenerator();
        console.log(this)
    })
}

for(let heading of headings){
    heading.addEventListener('click',colorize)
}
function colorize(){
    this.style.backgroundColor =randomColorGenerator();

}
function randomColorGenerator(){
    let color1 = Math.floor(Math.random()*255);
    let color2 = Math.floor(Math.random()*255);
    let color3 = Math.floor(Math.random()*255);

    return `rgb(${color1},${color2},${color3})`
}
