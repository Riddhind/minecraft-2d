var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_img_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);

    });
    
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_image_width);
        block_img_object.scaleToHeight(block_image_height);

        block_img_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_img_object);
    })
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '73'){
        console.log("shift and i pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if(e.shiftKey == true && keyPressed == '68'){
        console.log("shift and d is pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
       left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
         console.log("right");
     }

     if(keyPressed == '67'){
         new_image('cloud.jpg');
         console.log("c");
     }

     if(keyPressed == '75'){
        new_image('dark_green.png');
        console.log("k");
     }

        if(keyPressed == '71'){
            new_image('ground.png');
            console.log("g");
    }

    if(keyPressed == '76'){
        new_image('light_green.png');
        console.log("l");
}

if(keyPressed == '82'){
    new_image('roof.jpg');
    console.log("r");
}

if(keyPressed == '84'){
    new_image('trunk.jpg');
    console.log("t");
}

if(keyPressed == '85'){
    new_image('unique.png');
    console.log("u");
}
     
if(keyPressed == '87'){
    new_image('wall.jpg');
    console.log("w");
}

if(keyPressed == '89'){
    new_image('yellow_wall.png');
    console.log("y");
}

}


function up(){
    if(player_y >=0 ){
        player_y = player_y - block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("when up arrow key is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <=450 ){
        player_y = player_y + block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("when down arrow key is pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >=0 ){
        player_x = player_x - block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("when left arrow key pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 1100){
        player_x = player_x + block_image_width;
        console.log("block_image_width = " + block_image_width)
        console.log("when right arrow key pressed, x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

