

import { easing } from './easing.js';

/**
 * Animate a value from start to end using an easing function
 * @param {Object} options Animation options
 * @param {number} options.from Start value
 * @param {number} options.to End value
 * @param {number} options.duration Duration in milliseconds
 * @param {string} options.easing Easing function name
 * @param {Function} options.onUpdate Callback function with current value
 * @param {Function} options.onComplete Callback function when animation completes
 */
export function animate({
    from = 0,
    to = 1,
    duration = 1000,
    easing: easingName = 'linear',
    onUpdate = () => {},
    onComplete = () => {}
}) {
    const startTime = performance.now();
    const easingFn = easing[easingName] || easing.linear;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easedProgress = easingFn(progress);
        const currentValue = from + (to - from) * easedProgress;
        
        onUpdate(currentValue);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            onComplete();
        }
    }
    
    requestAnimationFrame(update);
}



// Constants for calculations
const PI = Math.PI;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;

// Helper function for bounce easing
function bounceOut(x) {
    const n1 = 7.5625;
    const d1 = 2.75;
    
    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}

// Main easing functions
export const easing = {
    // Linear
    linear: x => x,
    
    // Quad
    easeInQuad: x => x * x,
    easeOutQuad: x => 1 - (1 - x) * (1 - x),
    easeInOutQuad: x => x < 0.5 
        ? 2 * x * x 
        : 1 - Math.pow(-2 * x + 2, 2) / 2,
    
    // Cubic
    easeInCubic: x => x * x * x,
    easeOutCubic: x => 1 - Math.pow(1 - x, 3),
    easeInOutCubic: x => x < 0.5 
        ? 4 * x * x * x 
        : 1 - Math.pow(-2 * x + 2, 3) / 2,
    
    // Quart
    easeInQuart: x => x * x * x * x,
    easeOutQuart: x => 1 - Math.pow(1 - x, 4),
    easeInOutQuart: x => x < 0.5 
        ? 8 * x * x * x * x 
        : 1 - Math.pow(-2 * x + 2, 4) / 2,
    
    // Quint
    easeInQuint: x => x * x * x * x * x,
    easeOutQuint: x => 1 - Math.pow(1 - x, 5),
    easeInOutQuint: x => x < 0.5 
        ? 16 * x * x * x * x * x 
        : 1 - Math.pow(-2 * x + 2, 5) / 2,
    
    // Sine
    easeInSine: x => 1 - Math.cos((x * PI) / 2),
    easeOutSine: x => Math.sin((x * PI) / 2),
    easeInOutSine: x => -(Math.cos(PI * x) - 1) / 2,
    
    // Expo
    easeInExpo: x => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
    easeOutExpo: x => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
    easeInOutExpo: x => x === 0 ? 0 
        : x === 1 ? 1 
        : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2,
    
    // Circ
    easeInCirc: x => 1 - Math.sqrt(1 - Math.pow(x, 2)),
    easeOutCirc: x => Math.sqrt(1 - Math.pow(x - 1, 2)),
    easeInOutCirc: x => x < 0.5 
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
    
    // Elastic
    easeInElastic: x => x === 0 ? 0 
        : x === 1 ? 1 
        : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
    easeOutElastic: x => x === 0 ? 0 
        : x === 1 ? 1 
        : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
    easeInOutElastic: x => x === 0 ? 0 
        : x === 1 ? 1 
        : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 
        : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
    
    // Back
    easeInBack: x => c3 * x * x * x - c1 * x * x,
    easeOutBack: x => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
    easeInOutBack: x => x < 0.5 
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
    
    // Bounce
    easeInBounce: x => 1 - bounceOut(1 - x),
    easeOutBounce: bounceOut,
    easeInOutBounce: x => x < 0.5 
        ? (1 - bounceOut(1 - 2 * x)) / 2 
        : (1 + bounceOut(2 * x - 1)) / 2
};