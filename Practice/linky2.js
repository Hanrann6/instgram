document.addEventListener("DOMContentLoaded",
  function(e){
    let keydowm = document.querySelector("#keydowm")
    keydown.addEventListener("keydown",
     function(e){
        console.log(e.target.value)
     }
    
    )

    let change = document.querySelector("#change")
    change.addEventListener("change",
     function(e){
        console.log(e.target.value)
     }
    )

    let input = document.querySelector("#input")
    input.addEventListener("input",
     function(e){
        console.log(e.target.value)
     }
    )
  }
 )

 function red(e){
    e.target.style.backgroundColor = "red"
 }

 function blue(e){
    e.target.style.backgroundColor = "blue"
 }