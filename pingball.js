window.onload = function () {
    //TODO: get canvas object and set width and height dynamically....
    let canvas = document.getElementById('myCanvas')
    canvas.width = 380;
    canvas.height = 400;

    //TODO: get 2D context to draw on canvas....
    let ctx = canvas.getContext('2d');

    //TODO: draw and set ball Object properties...
    let ballRadius = 10
    let ballXcodinate = canvas.width / 2
    let ballYcodinate = canvas.height - ballRadius
    let addBallXcodinate = 2
    let addBallYcodinate = -2

    function drawBall() {
        ctx.beginPath()
        ctx.arc(ballXcodinate, ballYcodinate, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = defaultBallColor
        ctx.fill()
        ctx.closePath()
    }

    //TODO: draw and set paddel Object properties....
    let paddelHeight = 10
    let paddelWidth = 75
    let paddelX = canvas.width / 2 - paddelWidth
    let paddelY = canvas.height - paddelHeight


    function drawPaddel() {
        ctx.beginPath()
        ctx.rect(paddelX, paddelY, paddelWidth, paddelHeight)
        ctx.fillStyle = 'lightblue'
        ctx.fill()
        ctx.closePath()
    }

    //TODO: here we set colors and other variables that we can use in our application later....
    let defaultBallColor = "#fff"
    let randomColors = ['green', 'blue', 'red', 'yellow', 'orange']



    function changeBallColor() {
        defaultBallColor = randomColors[Math.floor(Math.random() * randomColors.length)]
    }

    //TODO: make the ball to move and bounce on canvas wall.... 
    function bounceBall() {
        ballXcodinate += addBallXcodinate
        ballYcodinate += addBallYcodinate

        if (ballXcodinate + addBallXcodinate > canvas.width - ballRadius || ballXcodinate + addBallXcodinate < ballRadius) {
            addBallXcodinate = - addBallXcodinate
            changeBallColor()

        }

        if (ballYcodinate + addBallYcodinate < ballRadius || ballYcodinate + addBallYcodinate > canvas.height - ballRadius) {
            addBallYcodinate = - addBallYcodinate
            changeBallColor()
        }
    }

    //TODO: make paddel to move in left and right direction.....


    let leftPressed = false
    let rightPressed = false
    var addPaddelX = 10
    var addPaddelY = -7

    document.addEventListener('keydown', keyPressedDown, false);
    document.addEventListener('keyup', keyPressedUp, false);

    function keyPressedDown(event) {
        if (event.key == 'Right' || event.key == 'ArrowRight') {

            rightPressed = true
            paddelX += addPaddelX
            console.log(paddelX + addPaddelX)
            if ( paddelX + addPaddelX > 315 )
                 paddelX = 315 - paddelHeight
        }

        else if (event.key == 'Left' || event.key == 'ArrowLeft') {

            leftPressed = true
            paddelX -= addPaddelX
            if ( paddelX + addPaddelX < 0 )
                paddelX = 0
        }

       
    }

    function keyPressedUp(event) {
        if (event.key == 'Right' || event.key == 'ArrowRight') {

            rightPressed = false
        }

        else if (event.key == 'Left' || event.key == 'ArrowLeft') {

            leftPressed = false
            
        }
    }

   




    //TODO: this is where game will start running..
    function startGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawBall()
        bounceBall()
        drawPaddel()
    }

    setInterval(startGame, 10)

}