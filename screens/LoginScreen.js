import React, { Component } from 'react';
import{View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    userLogin=(emailid,password)=>{
     firebase.auth().signInWithEmailAndPassword(emailid,password)
     .then(()=>{
         return(Alert.alert("Successfully Login"))
     })
     .catch((error)=>{
      var errorMessages = error.message;
      return(Alert.alert(errorMessages))
     })
    }

    userSignup=(emailid,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailid,password)
        .then((response)=>{
            return(Alert.alert("User Added Succesfully"))
        })
        .catch((error)=>{
         var errorMessages = error.message;
         return(Alert.alert(errorMessages))
        });
       }
       render(){
           return(
            <View style={styles.container}> 
            <View style={styles.profileContainer}>
              <Text style={styles.title}>BedTime Stories</Text>
                  </View>
                   <View style={styles.buttonContainer}> 
                   <TextInput style={styles.loginBox} 
                   placeholder="abc@example.com" 
                   keyboardType ='email-address' 
                   onChangeText={(text)=>{ this.setState({ emailId: text }) 
                   }} /> 
                   <TextInput style={styles.loginBox} 
                   secureTextEntry = {true} 
                   placeholder="password" 
                   onChangeText={(text)=>{ this.setState({ password: text }) 
                   }} />

                <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
                 onPress = {()=>{
                     this.userLogin(this.state.emailId, this.state.password)}} >
                         <Text style={styles.buttonText}>Login</Text> 
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.button} 
                         onPress={()=>{this.userSignup(this.state.emailId, this.state.password)}} > 
                         <Text style={styles.buttonText}>SignUp</Text> 
                         </TouchableOpacity>
                   </View>
                   </View>
           )
       }
    }
const styles = StyleSheet.create({ 
    container:{ 
        flex:1, 
        backgroundColor:'#F8BE85' 
    }, 
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
    },
    title :{ 
        fontSize:65,
        fontWeight:'300', 
        paddingBottom:30,
        color : '#ff3d00' 
    },
    loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
            fontSize: 20,
            margin:10,
                        paddingLeft:10 
                    },
                     button:{ 
                         width:300,
                          height:50, 
                          justifyContent:'center',
                           alignItems:'center',
                            borderRadius:25, 
                            backgroundColor:"#ff9800",
                             shadowColor: "#000",
                              shadowOffset: {
                                   width: 0, 
                                   height: 8,
                                 },
                                  shadowOpacity: 0.30, 
                                  shadowRadius: 10.32,
                                   elevation: 16, 
                                }, 
                                buttonText:{ 
                                    color:'#ffff',
                                     fontWeight:'200',
                                      fontSize:20 
                                    },
                                     buttonContainer:{
                                          flex:1, 
                                          alignItems:'center' 
                                        }
                                     })