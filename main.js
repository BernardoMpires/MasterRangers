var canvas = new fabric.Canvas('myCanvas'); 
// Create canvas variable #
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);
    });
}
// para enviar imagens #


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if (keyPressed == '80') {
	block_x = 600;
	new_image('pr.png');
	console.log(p);
}

if (keyPressed == '66') {
	block_x = 700;
	new_image("br.png");
	console.log(b);
}

if (keyPressed == '71') {
    block_x = 200;
    new_image('gr.png');
    console.log(g);
}

if (keyPressed == '82') {
    block_x = 200;

    new_image('rr1.png');
    console.log(r);
}

if (keyPressed == '89') {
	block_x = 350;
	new_image('yr.png');
	console.log(y);
}
	
}

