// Magical interactions for The Little Wizards Quill

document.addEventListener('DOMContentLoaded', function() {
    // Initialize magical effects
    initMagicalCursor();
    initScrollEffects();
    createFloatingElements();
});

// Magical cursor trail effect
function initMagicalCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magical-cursor';
    document.body.appendChild(cursor);
    
    // Add cursor styles
    const style = document.createElement('style');
    style.textContent = `
        .magical-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #ffd700, transparent);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.7;
            transition: all 0.1s ease;
            z-index: 9999;
        }
        
        .trail-particle {
            position: fixed;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            animation: fadeOut 1s ease-out forwards;
            z-index: 9998;
        }
        
        @keyframes fadeOut {
            from { opacity: 0.8; transform: scale(1); }
            to { opacity: 0; transform: scale(0.2); }
        }
    `;
    document.head.appendChild(style);
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        
        // Create trail particles randomly
        if (Math.random() > 0.8) {
            createTrailParticle(mouseX, mouseY);
        }
    });
}

function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'trail-particle';
    particle.style.left = x - 2 + 'px';
    particle.style.top = y - 2 + 'px';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Scroll-triggered animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation styles and observe elements
    const animatedElements = document.querySelectorAll('.feature-card, .intro, .cta');
    
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .feature-card, .intro, .cta {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
    `;
    document.head.appendChild(animationStyle);
    
    animatedElements.forEach(el => observer.observe(el));
}

// Create floating magical elements
function createFloatingElements() {
    const symbols = ['✨', '🌟', '⭐', '💫', '🪄'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingSymbol(symbols[Math.floor(Math.random() * symbols.length)]);
        }, i * 2000);
    }
    
    // Continue creating symbols periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            createFloatingSymbol(symbols[Math.floor(Math.random() * symbols.length)]);
        }
    }, 5000);
}

function createFloatingSymbol(symbol) {
    const element = document.createElement('div');
    element.textContent = symbol;
    element.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 20 + 15}px;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight + 50}px;
        pointer-events: none;
        z-index: 1000;
        opacity: 0.7;
        animation: floatUp ${5 + Math.random() * 3}s linear forwards;
    `;
    
    document.body.appendChild(element);
    
    // Remove element after animation
    setTimeout(() => {
        element.remove();
    }, 8000);
}

// Add floating animation
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
        }
        90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingStyle);

// Magic button interaction
function startWriting() {
    const button = document.querySelector('.magic-button');
    const originalText = button.innerHTML;
    
    // Create magical explosion effect
    createMagicalExplosion(button);
    
    // Change button text temporarily
    button.innerHTML = '<span>✨ Magic Activated! ✨</span>';
    button.style.background = 'linear-gradient(45deg, #00ff87, #60efff)';
    
    setTimeout(() => {
        // For now, show an alert. In a real app, this would navigate to the writing interface
        alert('🪄 Welcome to your magical writing space! ✨\n\nThis is where your writing interface would load. The magic is just beginning!');
        
        // Reset button
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(45deg, #4a00e0, #8e2de2)';
    }, 2000);
}

function createMagicalExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.textContent = '✨';
        particle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 10000;
            animation: explode 1s ease-out forwards;
            animation-delay: ${i * 0.1}s;
        `;
        
        const angle = (i / 12) * 360;
        const distance = 100;
        
        particle.style.setProperty('--angle', angle + 'deg');
        particle.style.setProperty('--distance', distance + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// Add explosion animation
const explosionStyle = document.createElement('style');
explosionStyle.textContent = `
    @keyframes explode {
        0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) rotate(720deg) translateY(var(--distance, -100px)) scale(0.2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(explosionStyle);

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            
            // Add sparkle effect on hover
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 24px;
                animation: sparkleHover 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 600);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add sparkle hover animation
const sparkleHoverStyle = document.createElement('style');
sparkleHoverStyle.textContent = `
    @keyframes sparkleHover {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.8) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleHoverStyle);