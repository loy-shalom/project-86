var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL("BirthdayImage.jpg" function(img){
	Block_Image_Object = Img;

    Block_Image_Object.scaletowidth(700);
    Block_Image_Object.scaletoheight(510);
    Block_Image_Object.set({
        top:0
        left=0
    });
    canvas.add(Block_Image_Object);
});
}

function playSound(){
	x.play();
}
