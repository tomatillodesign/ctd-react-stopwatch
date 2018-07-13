import React, { Component } from 'react';

export default function StartPauseButton(props) {
    
    let text = 'Start',
        classIsActive = 'stopped';
    
    if( props.isRunning ) {
        text = 'Pause';
        classIsActive = 'running';
    }
        
    return <button type="button" id="start-stop-button" className={classIsActive} onClick={props.onStartOrPause} >{text}</button>;

    
}

