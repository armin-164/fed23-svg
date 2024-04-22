var tl = new TimelineLite();

const classArray = [".l-1", ".l-2", ".l-3", ".l-4", ".l-5"]

function activateAnimation() {
    classArray.forEach(letter => {
        tl.to(letter, 2, {strokeDashoffset:"0"});   
    })
    tl.to(".cls-1", 1.2, {fillOpacity:1}, "-=1");

}

activateAnimation();