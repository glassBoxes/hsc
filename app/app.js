function bufferDDMRP(canvas, greenValue, yellowValue, redValue) {
	var canvas = document.getElementById(canvas);
	if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.font = "bold 12px Arial";
   	ctx.textAlign = "center";
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0,0); // start
    ctx.lineTo(200,0);
	ctx.lineTo(190,40);
	ctx.lineTo(10,40);
    ctx.fill();
    ctx.fillStyle = 'white';
	ctx.fillText(greenValue, canvas.width/2, 25);
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(10,40); //start
    ctx.lineTo(190,40);
	ctx.lineTo(180,80);
	ctx.lineTo(20,80);
    ctx.fill();
    ctx.fillStyle = 'white';
 	ctx.fillText(yellowValue, canvas.width/2, 65);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(20,80); // start
    ctx.lineTo(180,80);
	ctx.lineTo(170,120);
	ctx.lineTo(30,120);
    ctx.fill();
    ctx.fillStyle = 'white';
 	ctx.fillText(redValue, canvas.width/2, 105);
  }
}


bufferDDMRP('workshop-canvas', '20', '60', '20');
$('#workshop-canvas').hide();
bufferDDMRP('central-warehouse-canvas', '15', '50', '25');
$('#central-warehouse-canvas').hide();
bufferDDMRP('regional-warehouse-canvas', '10', '55', '20');
$('#regional-warehouse-canvas').hide();

$('#workshop').click(function() {
	$('#workshop-canvas').toggle('slow');
});

$('#central-warehouse').click(function() {
	$('#central-warehouse-canvas').toggle('slow');
});

$('#regional-warehouse').click(function() {
	$('#regional-warehouse-canvas').toggle('slow');
});