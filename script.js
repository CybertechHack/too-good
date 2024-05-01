const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoconanimation(){
    let vidcon = document.querySelector("#video-container")
 let play = document.querySelector("#play")
vidcon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        scale:1,
        opacity:1,
    })
//   play.style.opacity=1;
//   play.style.scale=1;
//   play.style.left=dets.clientX+"px";
//   play.style.top=dets.clientY+"px";
})
vidcon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        scale:0,
        opacity:0,
    })
    

    // play.style.opacity=1;
    // play.style.scale=0;
})
vidcon.addEventListener("mousemove",function(dets){
    gsap.to(play,{
       left:dets.x-40,
       top:dets.y-58,
    })
})
}
videoconanimation()
function loadinganimation(){
    gsap.from("#page1 h1",{
        y: 30,
        opacity:0,
        delay:0.5,
       duration:0.9,
       stagger:0.3,
    })
}
loadinganimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
     left:dets.x,
     top:dets.y,
    })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
})
document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
document.querySelector("#child2").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
})
document.querySelector("#child2").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
document.querySelector("#child3").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
})
document.querySelector("#child4").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
})
document.querySelector("#child3").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
document.querySelector("#child4").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})