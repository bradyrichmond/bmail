import React, { Component } from 'react';
import { connect } from 'react-redux';

class Folders extends Component {
    constructor(props) {
        super(props);
    }

    setSelectedFolder(id){
        this.props.dispatch();
    }

    render() {
        return (
            <div className="bmail-folders-container">
                {this.props.folders.length > 0 && 
                    <div className="bmail-folders">
                        {this.props.folders.map(
                            (folder) => {
                                return (<Folder folder={folder} key={folder.id} selected={folder.id === this.props.selectedFolder}/>)
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

class Folder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`bmail-folder ${this.props.selected ? 'selected' : ''} ${this.props.folder.name}`}>
                <div className="bmail-folder-name">
                    {this.props.folder.name}
                </div>
                <div className="bmail-folder-email-count">
                    {this.props.folder.emailCount}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        folders: state.user.folders,
        selectedFolder: state.user.selectedFolder
    }
}

export default connect(mapDispatchToProps)(Folders)