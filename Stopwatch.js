import React, { Component } from 'react';
import StartPauseButton from './StartPauseButton.js';
import ClearButton from './ClearButton.js';
import TimeDisplay from './TimeDisplay.js';

/* ------------------------------
Homework assigned on 7/12:
Timer display properly ✓
Clear button working + formatting ✓
BONUS: make start/pause button back into a functional component ✓
------------------------------ */


class Stopwatch extends Component {
    
    constructor() {
        super();
        
        this.state = {
            isRunning : false,
            elapsedTime : 0,
        }
        
        this.onStartOrPause = this.onStartOrPause.bind(this);
        this.tick = this.tick.bind(this);
        this.clearTime = this.clearTime.bind(this);
    }
    
    
    onStartOrPause() {
        
        let isRunning = !this.state.isRunning;
        
        this.setState({
            isRunning : isRunning,
        });
        console.log('Start/Pause Button Clicked');
        
        if( isRunning ) {
            this.intervalId = setInterval(this.tick, 10);    
        } else {
            clearInterval(this.intervalId);
        }
        
    }
    
    tick() {
        this.setState({
           elapsedTime : this.state.elapsedTime + 10
        });
    }
    
    
    clearTime() {
        this.setState({
            elapsedTime : 0
        });
    }
    
    
    render() {
        
        return (
        <div className="stopwatch-app">
            <TimeDisplay time={this.state.elapsedTime} />
            <br/>
            <StartPauseButton isRunning={this.state.isRunning} onStartOrPause={this.onStartOrPause} />
            <ClearButton isRunning={this.state.isRunning} onClear={this.clearTime} time={this.state.elapsedTime} />
        </div>
        );
        
    }
    
}

export default Stopwatch;
