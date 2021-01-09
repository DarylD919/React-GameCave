import React from 'react'
import {Button} from './Button';

import '../App.css'
import './main.css'

export default function main(props) {

    return (
        <div className="main-container">
            <h1>Welcome to your GameCave</h1>
            <div className="main-btn">
                <Button 
                    className="btn"
                    buttonStyle ="btn-primary"
                    buttonSize="btn-large"
                    onClick="/gameroom"
                    >
                        Get Started
                </Button>
                <Button 
                    className="btn"
                    buttonStyle ="btn-outline"
                    buttonSize="btn-large"
                    >
                        Gallery
                </Button>
            </div>
        </div>
    )
}
