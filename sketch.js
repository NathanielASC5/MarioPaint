function setup() {
    createCanvas(500,500);
    background(255);
    fill("green");
    rect(50,200, 100,80);
    fill("yellow");
    rect(200,200,100,80);
    fill("red");
    rect(350,200,100,80);
    fill("white");
    rect(250,300, 100, 80);
}

    
function mouseDragged() {
    ellipse(mouseX, mouseY,random(60,155), random(40,158), random(69,150));
    //prevent default 
    return false;
}

function mouseClicked() {
    if(mouseX > 50 && mouseX < 150 && mouseY > 200 && mouseX < 280 ) {
        fill("green");

    }else if(mouseX >200 && mouseX < 300 && mouseY > 200 && mouseY < 280 ) {
        fill("yellow");

    }else if(mouseX > 350 && mouseX < 450 && mouseY > 200 && mouseY < 280 ) {
        fill("red");
    }else if(mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 380)  {
        background("white");
        setup();
    }
}

    
    
