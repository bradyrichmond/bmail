import React, { Component } from 'react';
import Folders from './Folders';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bmail-sidebar">
                <div className="bmail-sidebar-content">
                    <Compose />
                    <Folders />
                </div>
            </div>
        )
    }
}

class Compose extends Component {
    render() {
        return (
            <div className="bmail-compose-button">
                Compose
            </div>
        )
    }
}