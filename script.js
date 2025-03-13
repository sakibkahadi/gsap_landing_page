function page1Animation(){
    
let tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button", {
    y: 40, opacity:0, delay:1,  duration:.7
    ,stagger:.15
})
tl.from(".center-part1 h1",{
    x:-300,opacity:0, duration:.9
})
tl.from(".center-part1 p",{
    x:-200,opacity:0, duration:.4
})
tl.from(".center-part1 button",{
    opacity:0, duration:.4
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:.6
}, "-=2")

tl.from(".section1Bottom img", {
    opacity:0, y:30, duration:0.6, stagger:.6
})


}
page1Animation()

function page2Animation(){
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2", scroller:"body", start:"top 50%", scrub:2, end:"top -50"
        }
    })
    
    tl2.from(".services ", {
        y:30, opacity:0, duration:1,
       
    })
    tl2.from(".elem.line1.left",{
        x:-300, opacity:0, duration:1
    }, "anyName")
    tl2.from(".elem.line1.right",{
        x:300, opacity:0, duration:1
    }, "anyName")
    tl2.from(".elem.line2.left",{
        x:-300, opacity:0, duration:1
    }, "any")
    tl2.from(".elem.line2.right",{
        x:300, opacity:0, duration:1
    },"any")
    
}
page2Animation()
