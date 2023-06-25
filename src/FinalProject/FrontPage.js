import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import firebase from "firebase/compat/app"; // to import the firebase functions
import {auth} from "firebase/compat/auth"; // to get the firebase authentication


const firebaseConfig = {
  apiKey: "AIzaSyAB4bT_U3K54QFYHiamSXcEQgKNMT6zPpw",
  authDomain: "react1-b180c.firebaseapp.com",
  projectId: "react1-b180c",
  storageBucket: "react1-b180c.appspot.com",
  messagingSenderId: "1013799452541",
  appId: "1:1013799452541:web:8fa2c6b8d8e80b3671d614",
  databaseURL : "https://react1-b180c-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig); // inilitize the firebase 

class FrontPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : 1,
            status : "Get stated with a free account"
        };
    }

    createAccount(event){ // function to create the user in firebase
        event.preventDefault();

        const name = event.target.USERNAME.value;
        const email = event.target.EMAIL.value;
        const pass = event.target.PASSWORD.value;
        console.log(name+" "+email+" "+pass);

        if(name != "" && email != "" && pass != ""){

            const auth = firebase.auth();

            firebase.auth().createUserWithEmailAndPassword(email, pass) // firebase create function
                .then((userCredential) => {
                var user = userCredential.user;
                console.log(user);
                this.setState({status : "Registerted"});
                event.target.USERNAME.value = "";
                event.target.EMAIL.value = "";
                event.target.PASSWORD.value = "";


            })
                .catch((error) => {
                    this.setState({status : error.message});
                    event.target.USERNAME.value = "";
                    event.target.EMAIL.value = "";
                    event.target.PASSWORD.value = "";
            });

        }else{
            this.setState({status : "Fill all the values"});
        }

    }

    logIn(event){   // function to login the user in firebase
        event.preventDefault();
        const email = event.target.EMAIL.value;
        const pass = event.target.PASSWORD.value;
        console.log(email+" "+pass);

        firebase.auth().signInWithEmailAndPassword(email, pass) // firebase login function
            .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            this.setState({status : "User Sucessfully Found"});
            event.target.EMAIL.value = "";
            event.target.PASSWORD.value = "";
            // ...
        })
            .catch((error) => {
            this.setState({status : "Invalid credential, no user found"});
            console.log(error.message);
            event.target.EMAIL.value = "";
            event.target.PASSWORD.value = "";
        });
    }

    togglePage(){
        if(this.state.id == 0){
            this.setState({status : "Get stated with a free account"});
        }else{
            this.setState({status : "Login your account"});
        }
        this.setState({id : !this.state.id});
    }

  render() {
    return (
      <div>
        {
            this.state.id ? 
            <First status={this.state.status} create={this.createAccount.bind(this)} toggle={this.togglePage.bind(this)} /> : 
            <Second status={this.state.status} login={this.logIn.bind(this)} toggle={this.togglePage.bind(this)} />
        }
      </div>
    )
  }
}

export default FrontPage;
