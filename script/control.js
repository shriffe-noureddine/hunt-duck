document.addEventListener("keydown", move);

let horizental = 40;
let vertical = 40;

function move(e) {
    console.log(event.keyCode);
    switch(e.keyCode){
        case 37:{
            horizental -=10;
            break;
        }
        case 38:{
            vertical -=10;
            break;
        }
        case 39:{
            horizental +=10;
            break;
        }
        case 40:{
            vertical +=10;
            break;
        }
        default: 
            break;
    }
    
    

    if (horizental > 90) {
        horizental = 0;
    }else if (vertical >90){
        vertical =0;
    }
    
    
    document.querySelector("div").style.top = vertical + '%';
    document.querySelector("div").style.left = horizental + '%';
   
}
