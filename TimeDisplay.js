import React, { Component } from 'react';

export default function TimeDisplay(props) {
    
    let time = props.time;
    let secondsLeadingZero = null;
    let minutesLeadingZero = null;
    let rawSeconds = time / 1000;
    let sec = rawSeconds.toFixed(2);
        if( (sec < 10) || (sec % 60 < 10) ) { secondsLeadingZero = '0'; } else { secondsLeadingZero = null; }
        
    let min = sec / 60;
    let hours = min / 60;
    
    min = Math.floor(min);
    if( min < 10 ) { minutesLeadingZero = '0'; } else { minutesLeadingZero = null; }
    
    if( sec >= 60 ) {
        sec -= (min * 60);
    }
    
    let secondsToPublish = parseFloat(sec).toFixed(2);
    
    return <div className="time">{minutesLeadingZero}{min}:{secondsLeadingZero}{secondsToPublish}</div>;

    
}
