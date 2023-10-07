import { useEffect } from "react";


// useEffect is a function that takes in 2 parameters:
// a callback function, which is the 'logic' you want to run at specified times, and a 'dependancy' array
useEffect(() => {
    // Side effect logic here
    
    // Optional cleanup logic 

    return () => {
        // Cleanup actions, executed beofre the effect runs again or when the component unmounts
    };
}, [dependancy1, dependancy2]);

// dependancy array determines when the this effect will run 
// Three options:
// 1. leave off the dependancy array entirely
// the effect will run anytime ANYTHING chagnes in your component
// use this cautiously/sparingly/perhaps not at all
// 2. include an EMPTY dependancy array
// effect only runs ONCE; after the intitial render of the component

// 3. include variabes in your dependancy array
// the effect will run whenever ANY of those variables update

// Real world examples of useEffect:
// updating the document title when there are new unread messages
useEffect(() => {
    // update the title (in the browser tab) with number of unread messages
    document.title = 'You have ${unreadMessages} unread messages';
// whenever the number of unread messages changes
}, [unreadMessages]);

// slideshow: changes every 3 seconds
// whenever currentSlide changes, we create a new timre using setTimeout
// that waits 3 seconds before calling the nextSlide function
// reset the timre each time a new slide appears

useEffect(() => {
    // create a new timre called timer using setTimeout
    // that calls nextSlide after 3 seconds
    const timer = setTimeout(() => {
        nextSlide();
    }, 3000);
// before this effect runs again, it needs to clear out any existing timre
    return () => clearTimeout(timer);
    // this effect runs whenever currentSlide updates/changes
}, [currentSlide]);