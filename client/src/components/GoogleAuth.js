import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: "124399036639-6akfatqsoc41qm3esebk2op8u5gv5929.apps.googleusercontent.com",
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance(); 
                this.OnAuthChange(this.auth.isSignedIn.get()); 
                this.auth.isSignedIn.listen(this.OnAuthChange);
            });
        });
    }

    OnAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    OnSignInClick = () => {
        this.auth.signIn();
    }

    OnSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } 
        if (this.props.isSignedIn) {
            return (
                <button onClick={this.OnSignOutClick} className="ui red google button"><i className="google icon"/>Sign Out</button>
            );
        } else {
            return (
                <button onClick={this.OnSignInClick} className="ui red google button"><i className="google icon"/>Sign In With Google</button>

            );
        }
    }

    render() {
        return (
            this.renderAuthButton()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{
    signIn,
    signOut
})(GoogleAuth);