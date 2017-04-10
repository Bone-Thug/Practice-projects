var clickMe = document.getElementById("click")

clickMe.addEventListener("mouseenter",function(){
    var output = document.getElementById("output")
    output.innerHTML="JACOB IS A PIRATE"
})

clickMe.addEventListener("mouseleave",function(){
    var output = document.getElementById("output")
    output.innerHTML="";
})

clickMe.addEventListener("click", function(){
    var output= document.getElementById("output")
    output.innerHTML="MATH'ER FAK'ER"
})
                        
