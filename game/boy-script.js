let canvas = document.getElementById('sprite');
let context = canvas.getContext('2d');
let speed = 0;
//Adding images
const frontSprite = new Image();
frontSprite.src ='assets/spriteFrente.png';
const backSprite = new Image();
backSprite.src ='assets/spriteTras.png';
const rightSprite = new Image();
rightSprite.src ='assets/spriteDireita.png';
const leftSprite = new Image();
leftSprite.src ='assets/spriteEsquerda.png';
const planetImg = new Image();
planetImg.src = 'assets/planet.png';


const boy = {
    positionX: 520,
    positionY: 180,
    imgWidth: 55.9,
    imgHeight: 70,
    speedx: 0,
    speedy: 0,
    frames: 0,
    maxFrames: 8,
    frameInterval: 4,
    currentBoyImage: frontSprite,

    draw() {
        // context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage( // Drawing image
            boy.currentBoyImage,
            boy.imgWidth * Math.floor(boy.frames), 0, 
            boy.imgWidth, boy.imgHeight,
            boy.positionX, boy.positionY,
            boy.imgWidth, boy.imgHeight
        );
        boy.frames += speed; // Increasing frames, boy walking animation rolling
        
        if (boy.frames >= boy.maxFrames) {
            boy.frames = 0; // Restarts frames when it reaches maximum
        }
        
        if (boy.frames >= 4) {
            boy.frames = 0;
        }

        if (boy.positionX + boy.speedx > -1 && boy.positionX + boy.speedx < canvas.width - boy.imgWidth) {
            boy.positionX += boy.speedx; // Setting limits - Boy won´t exceed canvas limit
        }

        if (boy.positionY + boy.speedy > -1 && boy.positionY + boy.speedy < canvas.height - boy.imgHeight) {
            boy.positionY += boy.speedy; // Setting limits -  Boy won´t exceed canvas limit
        }

        if (boy.frames % boy.frameInterval === 0) {
            boy.frames++;
        }
    },
    
}

const planet = {
    positionX: 480, //+68
    positionY: 400,
    imgWidth: 136,
    imgHeight: 136,
    frames: 0
}


document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            speed = 0.15;
            boy.speedy = -6; // Move up (Y position reduces)
            boy.currentBoyImage = backSprite; // Updating current image
            break;
        case 'ArrowDown':
            speed = 0.15;
            boy.speedy = 6; // Moves down (Y position increases)
            boy.currentBoyImage = frontSprite; // Updating current image
            break;
        case 'ArrowLeft':
            speed = 0.15;
            boy.speedx = -6; // Move left (X position reduces)
            boy.currentBoyImage = leftSprite; // Updating current image
            break;
        case 'ArrowRight':
            speed = 0.15;
            boy.speedx = 6; // Moves right (X position increases)
            boy.currentBoyImage = rightSprite; // Updating current image
            break;
    }
});
        
document.addEventListener('keyup', function(event) {
    if(['ArrowUp', 'ArrowDown'].includes(event.key)) {
        boy.speedy = 0; // Stop vertical movement when releasing keys
        speed = 0
    }
    if(['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        boy.speedx = 0; // Stop horizontal movement when releasing keys
        speed = 0
    }
});

let currentPage = {}
class updatePage {
    constructor(crrPage) {
        this.currentPage = crrPage;
    }
    change(crrPage) {
        this.currentPage = crrPage;
    }
}

const pages = {
    initial:{
        draw(){
            context.font = "42px OCR A Std, monospace";
            context.fillStyle = 'whitesmoke';
            context.fillText("Do you know the order of the planets", 140, 70, 1000);
            context.fillText("in the solar system?", 310, 130);
            context.drawImage(
                planetImg,
                planet.imgWidth * Math.floor(planet.frames), 0, 
                planet.imgWidth, planet.imgHeight,
                planet.positionX, planet.positionY,
                planet.imgWidth, planet.imgHeight
            );
        }
    },

    // one:{
    //     draw(){
    //         drawOne(){
                
    //         }
    //     }
    // }
}

const c = new updatePage(pages.initial);

function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    boy.draw();
    c.currentPage.draw(); 
    requestAnimationFrame(loop);
}

loop();