import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bmail-header">
                <div className="bmail-header-left">
                    <div className="bmail-header-left-menu">
                        Header
                    </div>
                </div>
                <SearchBar/>
            </div>
        )
    }
}