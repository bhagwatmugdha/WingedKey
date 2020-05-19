let wingedKeys = [];
let brokenWingedKeyObj;

let backgroundImage;
let brokenWingedKey;
let wingedKey;


function preload() {
    backgroundImage = loadImage('assets/background.jpg');
    brokenWingedKey = loadImage('assets/BrokenWingedkey.png');
    wingedKey = loadImage('assets/Wingedkey.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let x = random(width);
    let y = random(height);
    let r = 150;

    brokenWingedKeyObj = new BrokenWingedKeyClass(x, y, r)
    
    for (let i = 0; i < 75; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(50, 150);
        
        let b = new WingedKeyClass(x, y, r);
        wingedKeys.push(b);
    }
}

function mousePressed() {
    brokenWingedKeyObj.clicked(mouseX, mouseY);
}

function draw() {
    image(backgroundImage, 0, 0, displayWidth, displayHeight);

    brokenWingedKeyObj.move();
    brokenWingedKeyObj.show();
    
    for (let i = 0; i < wingedKeys.length; i++) {
        wingedKeys[i].move();
        wingedKeys[i].show();
    }
}

class WingedKeyClass {
    constructor(x, y, r, img) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.wingedKeyImage = wingedKey;
    }

    move() {
        this.x = this.x + random(-20, 20);

        if(this.x < 0) {
            this.x = 0;
        } else if (this.x > windowWidth) {
            this.x = windowWidth;
        } 

        this.y = this.y + random(-20, 20);

        if(this.y < 0) {
            this.y = 0;
        } else if (this.y > windowHeight) {
            this.y = windowHeight;
        } 
    }

    show() {
        image(this.wingedKeyImage, this.x, this.y, this.r, this.r);
    }
}

class BrokenWingedKeyClass {
    constructor(x, y, r, img) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brokenWingedKeyImage = brokenWingedKey;
    }

    clicked(px, py) {
        if (
            px > this.x &&
            px < this.x + this.r &&
            py > this.y &&
            py < this.y + this.r
        ) {
            alert("You've caught the key, replay?");
        }
    }

    move() {
        this.x = this.x + random(-10, 10);

        if(this.x < 0) {
            this.x = 0;
        } else if (this.x > windowWidth) {
            this.x = windowWidth;
        } 

        this.y = this.y + random(-10, 10);

        if(this.y < 0) {
            this.y = 0;
        } else if (this.y > windowHeight) {
            this.y = windowHeight;
        } 
    }

    show() {
        image(this.brokenWingedKeyImage, this.x, this.y, this.r, this.r);
    }
}