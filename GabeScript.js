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

// Day/Night mode toggle functionality
function setupDarkModeToggle() {
    const modeToggle = document.querySelector('.mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    
    // Celestial objects
    const moonObject = document.querySelector('.celestial-object.moon');
    const sunObject = document.querySelector('.celestial-object.sun');
    
    // Background elements
    const darkBackground = document.querySelector('.background.dark-mode');
    const darkSky = document.querySelector('.sky.dark-mode');
    const darkTerrain = document.querySelector('.terrain.dark-mode');
    
    const lightBackground = document.querySelector('.background.light-mode');
    const lightSky = document.querySelector('.sky.light-mode');
    const lightTerrain = document.querySelector('.terrain.light-mode');
    
    let isDarkMode = true; // Start in dark mode
    let isAnimating = false; // Track if animation is in progress
    
    // Animation timing constants
    const SLIDE_DURATION = 1500; // match with CSS animation duration
    const CLEANUP_BUFFER = 100; // extra time buffer for cleanup
    
    modeToggle.addEventListener('click', () => {
        // Prevent multiple clicks during animation
        if (isAnimating) return;
        isAnimating = true;
        
        if (isDarkMode) {
            // Switch to light mode
            
            // Update toggle style
            modeToggle.classList.remove('dark');
            modeToggle.classList.add('light');
            modeIcon.src = 'Art/LightMode/Sun.png';
            
            // Background - just fade
            darkBackground.classList.add('fade-out');
            setTimeout(() => {
                lightBackground.style.display = 'block';
                lightBackground.classList.add('fade-in');
            }, 100);
            
            // Sky elements and celestial objects - pan down/up (IDENTICAL PATTERN)
            darkSky.classList.add('slide-down');
            moonObject.classList.add('slide-down');
            
            setTimeout(() => {
                // Sky transition
                lightSky.style.display = 'block';
                lightSky.classList.add('slide-up');
                
                // Celestial transition - SAME TIMING AS SKY
                sunObject.style.display = 'block';
                sunObject.classList.add('slide-up');
            }, 100);
            
            // Fade terrain elements
            darkTerrain.classList.add('fade-out');
            setTimeout(() => {
                lightTerrain.style.display = 'block';
                lightTerrain.classList.add('fade-in');
            }, 100);
            
        } else {
            // Switch to dark mode
            
            // Update toggle style
            modeToggle.classList.remove('light');
            modeToggle.classList.add('dark');
            modeIcon.src = 'Art/DarkMode/Moon.png';
            
            // Background - just fade
            lightBackground.classList.add('fade-out');
            setTimeout(() => {
                darkBackground.style.display = 'block';
                darkBackground.classList.add('fade-in');
            }, 100);
            
            // Sky elements and celestial objects - pan down/up (IDENTICAL PATTERN)
            lightSky.classList.add('slide-down');
            sunObject.classList.add('slide-down');
            
            setTimeout(() => {
                // Sky transition
                darkSky.style.display = 'block';
                darkSky.classList.add('slide-up');
                
                // Celestial transition - SAME TIMING AS SKY
                moonObject.style.display = 'block';
                moonObject.classList.add('slide-up');
            }, 100);
            
            // Fade terrain elements
            lightTerrain.classList.add('fade-out');
            setTimeout(() => {
                darkTerrain.style.display = 'block';
                darkTerrain.classList.add('fade-in');
            }, 100);
        }
        
        // Reset animations and cleanup after they complete
        setTimeout(() => {
            // First hide the elements that should be hidden
            if (isDarkMode) {
                // Now in light mode - hide dark mode elements
                darkBackground.style.display = 'none';
                darkSky.style.display = 'none';
                darkTerrain.style.display = 'none';
                moonObject.style.display = 'none';
            } else {
                // Now in dark mode - hide light mode elements
                lightBackground.style.display = 'none';
                lightSky.style.display = 'none';
                lightTerrain.style.display = 'none';
                sunObject.style.display = 'none';
            }
            
            // Wait a moment then remove all animation classes
            setTimeout(() => {
                // Remove all animation classes
                darkBackground.classList.remove('fade-out', 'fade-in');
                darkSky.classList.remove('slide-down', 'slide-up');
                darkTerrain.classList.remove('fade-out', 'fade-in');
                
                lightBackground.classList.remove('fade-out', 'fade-in');
                lightSky.classList.remove('slide-down', 'slide-up');
                lightTerrain.classList.remove('fade-out', 'fade-in');
                
                // Reset celestial animations 
                moonObject.classList.remove('slide-down', 'slide-up');
                sunObject.classList.remove('slide-down', 'slide-up');
                
                // Toggle mode state
                isDarkMode = !isDarkMode;
                
                // Allow new animations
                isAnimating = false;
            }, 50);
            
        }, SLIDE_DURATION + CLEANUP_BUFFER); // Wait for animations to complete plus buffer
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, starting animation'); 
    blinkAnimation();
    setupDarkModeToggle();
}); 