var ball, database;
var position;
var ball2, position2;
var PLAY = 0;
var gameState =


    //     rakesh @whitehatjr.com
    // ashwinikumar.singh @whitehatjr.com




    function setup() {
        database = firebase.database();
        console.log(database);
        createCanvas(500, 500);

        ball = createSprite(200, 200, 10, 10);
        ball.shapeColor = "red";
        ball.debug = true;


        ball2 = createSprite(100, 200, 10, 10);
        ball2.shapeColor = "green";
        ball2.debug = true;

        var ballPosition = database.ref('ball/position');
        ballPosition.on("value", readPosition, showError);

        var ballPosition2 = database.ref('ball2/position2');
        ballPosition2.on("value", readPosition2, showError);


        wall = createSprite(50, 50, 100, 5);
        wall2 = createSprite(100, 100, 5, 100);
        wall3 = createSprite(50, 150, 5, 100);
        wall4 = createSprite(100, 200, 100, 5);
        wall5 = createSprite(150, 250, 200, 5);
        wall6 = createSprite(150, 100, 5, 100);
        wall7 = createSprite(150, 300, 5, 100);
        wall8 = createSprite(100, 300, 100, 5);
        wall9 = createSprite(125, 350, 50, 5);
        wall10 = createSprite(100, 400, 5, 100);
        wall11 = createSprite(50, 400, 5, 100);
        wall12 = createSprite(75, 450, 50, 5);
        wall13 = createSprite(200, 400, 100, 5);
        wall14 = createSprite(200, 325, 5, 50);
        wall15 = createSprite(200, 50, 100, 5);
        wall16 = createSprite(200, 150, 5, 100);
        wall17 = createSprite(250, 150, 100, 5);
        wall18 = createSprite(250, 75, 5, 50);
        wall19 = createSprite(300, 175, 5, 350);
        wall20 = createSprite(250, 175, 5, 50);
        wall21 = createSprite(250, 450, 200, 5);
        wall22 = createSprite(350, 450, 5, 100);
        wall23 = createSprite(400, 350, 100, 5);
        wall24 = createSprite(400, 425, 5, 50);
        wall25 = createSprite(350, 300, 100, 5);
        wall26 = createSprite(350, 150, 5, 200);
        wall27 = createSprite(400, 200, 100, 5);
        wall28 = createSprite(400, 275, 5, 50);
        wall29 = createSprite(400, 150, 100, 5);
        wall30 = createSprite(400, 50, 5, 100);
        wall31 = createSprite(450, 50, 100, 5);
        wall32 = createSprite(500, 75, 5, 50);
        wall33 = createSprite(525, 100, 50, 5);
        wall34 = createSprite(550, 25, 5, 50);
        wall35 = createSprite(600, 50, 100, 5);
        wall36 = createSprite(600, 100, 5, 100);
        wall37 = createSprite(550, 200, 100, 5);
        wall38 = createSprite(500, 250, 100, 5);
        wall39 = createSprite(550, 275, 5, 50);
        wall40 = createSprite(650, 300, 100, 5);
        wall41 = createSprite(650, 200, 5, 100);
        wall42 = createSprite(675, 100, 50, 5);
        wall43 = createSprite(675, 450, 50, 5);
        wall44 = createSprite(650, 475, 5, 50);
        wall45 = createSprite(550, 450, 100, 5);
        wall46 = createSprite(550, 400, 100, 5);
        wall47 = createSprite(450, 450, 5, 100);
        wall48 = createSprite(675, 350, 50, 5);
        wall49 = createSprite(650, 325, 5, 50);
        wall50 = createSprite(475, 300, 50, 5);
    }

function draw() {
    background("white");

    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }

    if (keyDown("a")) {
        writePosition2(-1, 0);
    } else if (keyDown("d")) {
        writePosition2(1, 0);
    } else if (keyDown('w')) {
        writePosition2(0, -1);
    } else if (keyDown("s")) {
        writePosition2(0, +1);
    }

    drawSprites();

    ball2.bounceOff(wall)

    console.log(ball2.bounceOff(wall))

    // ball.collide(wall, changeColor);
    // ball.collide(wall2, changeColor);
    // ball.collide(wall3, changeColor);
    // ball.collide(wall4, changeColor);
    // ball.collide(wall5, changeColor);
    // ball.collide(wall6, changeColor);
    // ball.collide(wall7, changeColor);
    // ball.collide(wall8, changeColor);
    // ball.collide(wall9, changeColor);
    // ball.collide(wall10, changeColor);
    // ball.collide(wall11, changeColor);
    // ball.collide(wall12, changeColor);
    // ball.collide(wall13, changeColor);
    // ball.collide(wall14, changeColor);
    // ball.collide(wall15, changeColor);
    // ball.collide(wall16, changeColor);
    // ball.collide(wall17, changeColor);
    // ball.collide(wall18, changeColor);
    // ball.collide(wall19, changeColor);
    // ball.collide(wall20, changeColor);
    // ball.collide(wall21, changeColor);
    // ball.collide(wall22, changeColor);
    // ball.collide(wall23, changeColor);
    // ball.collide(wall24, changeColor);
    // ball.collide(wall25, changeColor);
    // ball.collide(wall26, changeColor);
    // ball.collide(wall27, changeColor);
    // ball.collide(wall28, changeColor);
    // ball.collide(wall29, changeColor);
    // ball.collide(wall30, changeColor);
    // ball.collide(wall31, changeColor);
    // ball.collide(wall32, changeColor);
    // ball.collide(wall33, changeColor);
    // ball.collide(wall34, changeColor);
    // ball.collide(wall35, changeColor);
    // ball.collide(wall36, changeColor);
    // ball.collide(wall37, changeColor);
    // ball.collide(wall38, changeColor);
    // ball.collide(wall39, changeColor);
    // ball.collide(wall40, changeColor);
    // ball.collide(wall41, changeColor);
    // ball.collide(wall42, changeColor);
    // ball.collide(wall43, changeColor);
    // ball.collide(wall44, changeColor);
    // ball.collide(wall45, changeColor);
    // ball.collide(wall46, changeColor);
    // ball.collide(wall47, changeColor);
    // ball.collide(wall48, changeColor);
    // ball.collide(wall49, changeColor);
    // ball.collide(wall50, changeColor);


    if (isTouching(wall, ball2)) {
        wall.shapeColor = "blue";
        ball.shapeColor = "blue";
    } else {
        ball.shapeColor = "green";
        wall.shapeColor = "green";
    }


}

function writePosition(x, y) {
    database.ref('ball/position').update({
        'x': position.x + x,
        'y': position.y + y
    })
}

function writePosition2(x, y) {
    database.ref('ball2/position2').update({
        'x': position2.x + x,
        'y': position2.y + y
    })
}


function readPosition(data) {
    position = data.val();
    console.log(position.x);
    ball.x = position.x;
    ball.y = position.y;
}

function readPosition2(data) {
    position2 = data.val();
    console.log(position2.x);
    ball2.x = position2.x;
    ball2.y = position2.y;
}

function showError() {
    console.log("Error in writing to the database");
}

// function changeColor() {
//     ball.shapeColor = "yellow"
// }

function isTouching(object1, object2) {
    if (object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
        object2.x - object1.x < object2.width / 2 + object1.width / 2 &&
        object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
        object2.y - object2.y < object2.height / 2 + object1.height / 2) {

        return true;
    } else {
        return false;
    }
}