function show() {
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
}
function rock() {
    document.getElementById("image1").classList.add("active");
    document.getElementById("image2").classList.add("active");
    var src2 = "../image/rock.png";
    var com = Math.floor(Math.random() * 3);
    var play="";
    var src="";
    if (com == 0) {
       src = "../image/rock.png";
        play="draw";
    }
    else if (com == 1) {
       src = "../image/paper.png";
        play="you lose";

    }
    else {
       src = "../image/scissors.png";
        play="you win";
    }
 setTimeout(()=>{
    document.getElementById("image1").classList.remove("active");
    document.getElementById("image2").classList.remove("active");
    document.getElementById("image2").src=src;
    document.getElementById("image1").src=src2;
   setTimeout( ()=>{alert(play)},500);

},3000);   
    
}
function paper() {
    document.getElementById("image1").classList.add("active");
    document.getElementById("image2").classList.add("active");
    var src2 = "../image/paper.png";
    var com = Math.floor(Math.random() * 3);

    if (com == 0) {
        src = "../image/rock.png";
        play="you win";
    }
    else if (com == 1) {
        src = "../image/paper.png";
        play="draw";

    } else {
        src = "../image/scissors.png";
        play="you lose";
    }
setTimeout(()=>{
    
    document.getElementById("image1").classList.remove("active");
    document.getElementById("image2").classList.remove("active");
    document.getElementById("image2").src=src;
    document.getElementById("image1").src=src2;
    setTimeout(()=>{alert(play)},500);
},3000);
    
}
function scissor() {
    document.getElementById("image1").classList.add("active");
    document.getElementById("image2").classList.add("active");
    var src2 = "../image/scissors.png";
    var com = Math.floor(Math.random() * 3);

    if (com == 0) {
        src = "../image/rock.png";
        play="you lose";
    }
    else if (com==1){
        src = "../image/paper.png";
        play="you win";

    } else {
        src = "../image/scissors.png";
        play="draw";
    }
setTimeout(()=>{
    
    document.getElementById("image1").classList.remove("active");
    document.getElementById("image2").classList.remove("active");
    document.getElementById("image2").src=src;
    document.getElementById("image1").src=src2;
    setTimeout(()=>{alert(play)},500);
},3000);
    
}
