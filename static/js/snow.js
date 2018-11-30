window.onload = function(){

    var canvas = document.getElementById("sky");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var max = 150;
    var flakes = [];

    for(var i = 0; i < max; i++){
        
        flakes.push({
            x: Math.random()*window.innerWidth,
            y: Math.random()*window.innerHeight,
            r: Math.random()*5 +2,
            d: Math.random() + 1
        })
    }

    function drawFlakes(){
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "white";
        context.beginPath();
        for(var i = 0; i < max; i++){
            var flake = flakes[i];
            context.moveTo(flake.x, flake.y);
            context.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
        }
        context.fill();
        moveFlakes();
    }

    var angle = 0;

    function moveFlakes(){
        angle += 0.01;
        for(var i = 0; i < max; i ++){
            var flake = flakes[i];

            flake.y += Math.pow(flake.d, 2) + 1;
            flake.x += Math.sin(angle) * 2;


            if(flake.y > window.innerWidth){
                flakes[i] = {x: Math.random() * innerWidth, y: 0, r: flake.r, d: flake.d};
            
            }
        }
    }
    setInterval(drawFlakes,25);
}
