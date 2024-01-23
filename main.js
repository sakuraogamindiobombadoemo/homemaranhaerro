var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImgW = 30;
blockImgH = 30;

var playerObject ="";
var blockImgObject ="";

function playerUpdate()
{
    fabric.Image.fromURL ("spider.png" , function(Img) {
        playerObject = Img;

        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImgObject);
    });
}
function newImage(getImage)
{
    fabric.Image.fromURL(getImage, function(Img) {
        blockImgObject = Img;

        blockImgObject.scaleToWidth(blockImgW);
        blockImgObject.scaleToHeight(blockImgH);
        blockImgObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImgObject);
    
    });
}
window.addEventListener('keydown', myKeyDown);
 function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '69')
    {
        console.log("E e shift pressionadas juntas");
        blockImgW = blockImgW + 10;
        blockImgH = blockImgH +10;
        document.getElementById("currentW").innerHTML = blockImgW;
        document.getElementById("currentH").innerHTML = blockImgH;
    }
    if(e.shiftKey == true && keyPressed =='81')
    {
        console.log("Q e shift juntos");
        blockImgW = blockImgW - 10;
        blockImgH = blockImgH - 10;
        document.getElementById("curretW").innerHTML = blockImgW;
        document.getElementById("currentH").innerHTML = blockImgH;
    }
    if(keyPressed == '38'){
        up();
        console.log("cima");
    }
    if(keyPressed == '40'){
        down();
        console.log("baixo");
    }
    if(keyPressed == '37'){
        left();
        console.log("esquerda");
    }
    if(keyPressed == '39'){
        right();
        console.log("direita");
    }
    if(keyPressed == '87'){
        newImage('preto.png');
        console.log("w");
    }
    if(keyPressed == '81'){
        newImage('roxo.png');
        console.log("a");
    }
    if(keyPressed == '62'){
        newImage('verde.png');
        console.log("b");
    }
    if(keyPressed == '82'){
        newImage('azul.png');
        console.log("r");
    }
    if(keyPressed == '85'){
        newImage('branco.png');
        console.log("u");
    }
 }
 function up()
 {
     if(playerY >=0)
     {
         playerY = playerY - blockImgH;
         console.log("altura da imagem do bloco =" +blockImgH );
         console.log( "Quando a tecla direcional cima for pressionada, X ="  + playerX + " , Y =" + playerY);         
         canvas.remove(playerObject);
         playerUpdate();
     }
   }
 
   function down(){
 
     if(playerY <=500)
     {
         playerY =playerY + blockImgH;
         console.log("altura da imagem do bloco =" + blockImgH);
         console.log( "Quando a tecla direcional baixo for pressionada, X ="  + playerX + " , Y =" + playerY); 
         canvas.remove(playerObject);
         playerUpdate();
     }
 }   
 
 function left(){
 
    if(playerX >0)
    {
        playerX =playerX - blockImgW;
        console.log("largura da imagem do bloco =" + blockImgW);
        console.log( "Quando a tecla direcional para esquerda for pressionada, X ="  + playerX + " , Y =" + playerY); 
        canvas.remove(playerObject);
        playerUpdate();
    }
}   

function right(){
 
    if(playerX <=850)
    {
        playerX = playerX + blockImgW;
        console.log("largura da imagem do bloco =" + blockImgW);
        console.log( "Quando a tecla direcional direita for pressionada, X ="  + playerX + " , Y =" + playerY); 
        canvas.remove(playerObject);
        playerUpdate();
    }
}   