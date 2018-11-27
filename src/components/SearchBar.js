import React, { Component } from 'react';
import './components.css'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.searchTextChange = this.searchTextChange.bind(this);

        this.state = {
            searchText: ''
        }
    }

    render() {
        return (
            <div className="searchbar-container-outer">
                <div className="searchbar-container-inner">
                    <input type="text" placeholder="Search bmail" className="search-bar" onChange={this.searchTextChange} value={this.state.searchText}/>
                </div>
            </div>
        );
    }

    searchTextChange(e) {
        this.setState({searchText: e.target.value})
    }

}