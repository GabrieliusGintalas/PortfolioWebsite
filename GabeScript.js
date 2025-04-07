// Add console.log statements to help debug
function blinkAnimation() {
    const gabe = document.getElementById('gabe');
    console.log('Found Gabe element:', gabe); 

    const baseSprite = './Art/Gabe/StandingGabe.png';
    const blinkSprites = ['./Art/Gabe/LeftBlinkGabe.png', './Art/Gabe/RightBlinkGabe.png'];
    
    function blink() {
        console.log('Blink function called'); 
        const blinkSprite = blinkSprites[Math.floor(Math.random() * blinkSprites.length)];
        
        gabe.src = blinkSprite;
        
        setTimeout(() => {
            gabe.src = baseSprite;
            console.log('Blink complete'); 
        }, 150); 
    }
    
    setInterval(() => {
        if (Math.random() < 0.3) {
            blink();
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, starting animation'); 
    blinkAnimation();
}); 