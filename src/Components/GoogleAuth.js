import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn , signOut} from '../actions'
 class GoogleAuth extends Component {


     
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId:'19298215034-ms8pvkdur7dfodupccpgcagitmd77kdg.apps.googleusercontent.com',
            scope:'email'
        }).then(()=>{
            this.auth=window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get())
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
    if(this.props.isSignedIn === null)
        return <button className="ui red loading button">Loading</button>
    else if(this.props.isSignedIn)
        return   (
        <button onClick={this.onSignOut} className="ui  google plus button">
            <i className="google icon" />
            SignOut
            </button>
        );
    else 
        return (
        <button onClick={this.onSignIn} className="ui  google plus button">
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
const mapStateToProps=(state)=>{
   return { isSignedIn:state.auth.isSignedIn}
}
export default connect(
    mapStateToProps,
    {
        signOut,
        signIn
    }
)(GoogleAuth)
