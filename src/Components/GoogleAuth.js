import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn , signOut} from '../actions'
 class GoogleAuth extends Component {
    state =  {
        isSignedIn:null,
    };

     
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId:'19298215034-ms8pvkdur7dfodupccpgcagitmd77kdg.apps.googleusercontent.com',
            scope:'email'
        }).then(()=>{
            this.auth=window.gapi.auth2.getAuthInstance();
            this.setState({isSignedIn : this.auth.isSignedIn.get()})
            this.auth.isSignedIn.listen(this.onAuthChange);
        })
        });
    }
    onAuthChange =(isSignedIn)=>{
        if(isSignedIn) this.props.signIn()
        else this.props.signOut()
    }
    onSignIn(){window.gapi.auth2.getAuthInstance().signIn()}
    onSignOut() { window.gapi.auth2.getAuthInstance().signOut()}

    renderAuthButton(){
    if(this.state.isSignedIn === null)
        return null
    else if(this.state.isSignedIn)
        return   (
        <button onClick={this.onSignOut} className="ui inverted red button">
            <i className="google icon" />
            SignOut
            </button>
        );
    else 
        return (
        <button onClick={this.onSignIn} className="ui inverted red button">
            <i className="google icon" />
            SignIn
            </button>
        );
    }


    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default connect(
    null,
    {
        signOut,
        signIn
    }
)(GoogleAuth)
