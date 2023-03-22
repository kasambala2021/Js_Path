const btn = document.querySelector('#button');
const simple = document.querySelector('#head1');
document.querySelector('body').style.backgroundColor = randomColorGenerator();simple.innerText = randomColorGenerator();
btn.addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = randomColorGenerator();
});

function randomColorGenerator(){
    let color1 = Math.floor(Math.random()*255);
    let color2 = Math.floor(Math.random()*255);
    let color3 = Math.floor(Math.random()*255);

    return `rgb(${color1},${color2},${color3})`
}