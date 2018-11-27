import React, { Component } from 'react';
import { connect } from 'react-redux';
import BmailPreview from './BmailPreview';
import '../App.css';

class Bmail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bmail-app-container">
                <div className='bmail-container'>
                    {!this.props.bmails &&
                        <p>You have zero unread emails</p>
                    }
                    {this.props.bmails && 
                        this.props.bmails.map((bmail) => {
                            return (<BmailPreview key={bmail.id} bmail={bmail} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bmails: state.bmail.bmails
    }
}

export default connect(mapStateToProps)(Bmail);