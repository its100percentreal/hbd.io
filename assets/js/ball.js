var canvas = document.getElementById( "myCanvas" );
var context = canvas.getContext( "2d" );
var width = 400;
var height = 200;
var gravity = 1;

var ball = {
    x: 100,
    y: 100,
    radius: 25,
    xSpeed: 1,
    ySpeed: 1,
    friction: 0.99,
    elasticity: 0.9,
    draw: function( ctx ) {
    	ctx.beginPath();
        ctx.arc( this.x, this.y, this.radius, 0, 2*Math.PI );
        ctx.fill();
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

setInterval( function(){
	
    context.clearRect( 0, 0, width, height );
    context.strokeRect( 0, 0, width, height );
    
    ball.move();
    
    // right 
    if ( ball.x + ball.radius >= width ) {
    	ball.x = width - ball.radius;
        ball.xSpeed = -ball.xSpeed * ball.elasticity;
    }
    
    // left
    if ( ball.x - ball.radius <= 0 ) {
    	ball.x = ball.radius;
        ball.xSpeed = -ball.xSpeed * ball.elasticity;
    }
    
    // down
    if ( ball.y + ball.radius >= height ) {
    	ball.y = height - ball.radius;
        ball.ySpeed = -ball.ySpeed * ball.elasticity;
    }
    
    // up
    if ( ball.y - ball.radius <= 0 ) {
    	ball.y = ball.radius;
        ball.ySpeed = -ball.ySpeed * ball.elasticity;
    }
    
    ball.xSpeed = ball.friction;
    ball.ySpeed = ball.ySpeed + ball.friction + gravity;
    
    ball.draw( context );
    
}, 10 );