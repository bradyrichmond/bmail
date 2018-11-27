import React, { Component } from 'react';
import '../App.css';
import Starred from '../images/starred.svg';
import Unstarred from '../images/unstarred.svg';
import { connect } from 'react-redux';
import { toggleEmailStar, toggleEmailCheck } from '../actions';

class BmailPreview extends Component {
    constructor(props) {
        super(props);

        this.markAsStarred = this.markAsStarred.bind(this);
        this.check = this.check.bind(this);
    }

    markAsStarred() {
        this.props.dispatch(toggleEmailStar(this.props.bmail.id));
    }

    check() {
        this.props.dispatch(toggleEmailCheck(this.props.bmail.id));
    }

    render() {
        return (
            <div className="bmail-preview">
                <input className='bmail-checkbox' type="checkbox" name="bmail" value="selected" checked={this.props.bmail.isChecked} onChange={this.check}/>
                <div onClick={this.markAsStarred}>
                    <img src={this.props.bmail.isStarred ? Starred : Unstarred} className='bmail-star' alt='star'/>
                </div>
                <div className="bmail-preview-from">{ this.props.bmail.fromName }</div>
                <div className="bmail-preview-subject">
                    {this.props.bmail.subject &&
                        <p>{ this.props.bmail.subject }</p>
                    }
                    {!this.props.bmail.subject &&
                        <p>No Subject.</p>
                    }
                </div>
                <div className="bmail-preview-dateReceived">
                    {this.props.bmail.dateReceived &&
                        <p>{ this.props.bmail.dateReceived }</p>
                    }
                </div>
            </div>
        )
    }
}

export default connect()(BmailPreview);