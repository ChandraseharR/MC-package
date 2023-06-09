import React, { Component } from 'react'
import {View, Button, TextInput} from 'react-native'
import firebase from 'firebase/compat/app'

console.log(firebase.auth) // Undefined
console.log(firebase.default.auth) // Function
export class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            
        }

        this.onSignUp=this.onSignUp.bind(this)
    }

    onSignUp(){
        const { email, password, name} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />
                <Button
                    onPress={() => this.onSignUp()}
                    title="Sign Up"
                />
            </View>
        )
    }
}

export default Login