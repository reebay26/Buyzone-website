var openmenu = document.querySelector(".openmenu")
var closemenu =  document.getElementById("closemenu")
var navitems = document.querySelector(".navitems")
 
openmenu.addEventListener("click",function(){
    navitems.style.top="0%"
})

closemenu.addEventListener("click",function(){
    navitems.style.top="-100%"
})
