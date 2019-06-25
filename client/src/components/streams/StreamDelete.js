import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { deleteStream, fetchStream } from '../../actions'

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={()=>{ this.props.deleteStream(id) }} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
           </React.Fragment>
        );
    }

    render () {
        return (
            <Modal
                title='Delete Stream'
                content={`Are you sure you want to delete 
                    "${((this.props.stream) ? this.props.stream.title : '')}"?`}
                actions={this.renderActions()}
                onDismiss={()=>{history.push('/')}}/>
        );    
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{
    deleteStream,
    fetchStream
})(StreamDelete);
