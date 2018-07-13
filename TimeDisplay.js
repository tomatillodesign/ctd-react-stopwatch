import React, { Component } from 'react';

export default function TimeDisplay(props) {
    
    let time = props.time;
    
    // These leadingzeros will be strings of '0' added 
    // to make the formatting correct without doing math 
    // or messing up the actual underlying number
    let secondsLeadingZero = null;
    let minutesLeadingZero = null;
    
    let rawSeconds = time / 1000;
    let sec = rawSeconds.toFixed(2);
    
    // Add a leading string '0' to seconds if necessary
    if( (sec < 10) || (sec % 60 < 10) ) { secondsLeadingZero = '0'; } else { secondsLeadingZero = null; }
        
    let min = sec / 60;
    let hours = min / 60;
    
    min = Math.floor(min); // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    
    // Add a leading string '0' to minutes if necessary
    if( min < 10 ) { minutesLeadingZero = '0'; } else { minutesLeadingZero = null; }
    
    // Make sure seconds never goes above 60
    if( sec >= 60 ) {
        sec -= (min * 60);
    }
    
    // make sure our seconds is a number with exactly 2 decimals
    let secondsToPublish = parseFloat(sec).toFixed(2);
    
    return <div className="time">{minutesLeadingZero}{min}:{secondsLeadingZero}{secondsToPublish}</div>;

    
}
