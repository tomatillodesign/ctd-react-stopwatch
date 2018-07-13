import React, { Component } from 'react';

export default function ClearButton(props) {
    if( props.isRunning || props.time === 0 ) {
        return <button type="button" id="clear-button" className="disabled">Clear</button>;
    } else {
        return <button type="button" id="clear-button" className="enabled" onClick={props.onClear}>Clear</button>;
    }
}
