
/*
=================================================
? => Splide Js :----
=================================================
*/

// Initialize Splide slider
var splide = new Splide('.splide', {
    type: 'loop',         // Infinite looping
    perPage: 4,           // Default number of slides per page
    cover: false,         // Image does not need to cover the whole slide
    height: '100px',      // Set slider height
    autoplay: true,       // Enable autoplay
    interval: 0,          // Set to 0 for no breaks between slides
    speed: 8000,          // Slow speed for smooth continuous flow (8 seconds per transition)
    pauseOnHover: false,  // Don't pause on hover for continuous effect
    arrows: false,        // Disable arrows for a clean, continuous flow
    pagination: false,    // Disable pagination for a clean look
    easing: 'linear',     // Use linear easing for smooth, continuous flow

    breakpoints: {
        1200: { // Adjust for large desktops
            perPage: 4,        // Show 4 slides at a time
            speed: 8000,       // Keep the speed the same for large screens
            height: '120px',   // Adjust the height for large screens
            gap: '10px',       // Small gap between images
        },
        1024: { // Adjust for tablets or small desktops
            perPage: 3,        // Show 3 slides at a time
            speed: 6000,       // Faster speed on medium screens
            height: '100px',   // Set height for medium screens
            gap: '8px',        // Gap between images
        },
        768: { // Adjust for tablets or smaller devices
            perPage: 2,        // Show 2 slides at a time
            speed: 5000,       // Even faster speed on small screens
            height: '90px',    // Adjust height
            gap: '5px',        // Smaller gap for smaller screens
        },
        480: { // Adjust for mobile devices
            perPage: 2,        // Show 1 slide at a time for mobile
            speed: 4000,       // Fastest speed on mobile
            height: '90px',    // Smaller height for mobile
            gap: '3px',        // Minimal gap on mobile
        },
    },
});

splide.mount();