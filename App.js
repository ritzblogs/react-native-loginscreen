import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Dimensions, KeyboardAvoidingView, TouchableOpacity, Keyboard, Text, View, Button, TextInput, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class App extends React.Component {
  render() {
    return (
         
       <ImageBackground
        source={{
          uri: 'https://i.ibb.co/sHhk5gL/bgimage.png',
        }}

        style={styles.backgroundImage}>

           <KeyboardAwareScrollView
              extraScrollHeight={20}
              resetScrollToCoords={{ x: 0, y: 0 }}
              enableOnAndroid={true}
              contentContainerStyle={styles.backgroundImage}
            >

              <Text style={{ fontSize: 18, color: "white", marginTop: 20, position: "absolute", top: 0, alignSelf: "center" }}>
                Welcome to my App
             </Text>

              <View style={styles.containerInput}>

                <View style={styles.viewStyle}>
                  <Icon name="user" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput

                    placeholder="Enter name" style={{ fontSize: 16, color: 'white', alignSelf: "center", alignItems: "center", marginLeft: 10, }}
                  />
                </View>

               

                <View style={styles.viewStyle}>

                  <Icon name="lock" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput placeholder="Enter password" secureTextEntry={true} style={{ fontSize: 16, color: '#fff', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                  <Text style={styles.textStyle}>LOGIN</Text>
                </TouchableOpacity>

                <View style={{
                  width: "90%", flexDirection: 'row',
                }}>
                  <Text style={{ flex: 1, textAlign: "left", margin: 10, fontSize: 14, color: "#fff", }}>Create Account</Text>
                  <Text style={{ flex: 1, justifyContent: "flex-end", textAlign: "right", margin: 10, fontSize: 14, color: "#fff", }}>Forgot Password?</Text>
                </View>

              </View>


              <Text style={{ fontSize: 18, color: "white", marginBottom: 20, position: "absolute", bottom: 0, alignSelf: "flex-end", paddingRight: 20 }}>
                Skip
             </Text>
             </KeyboardAwareScrollView>

             </ImageBackground>


        

    );
  }
}
export default App;
const styles = StyleSheet.create({
  containerInput: {
    justifyContent: 'center',
    width: "100%",
    alignContent: 'center',
    alignItems: "center",
    alignSelf: 'center',


  }, 

  backgroundImage: {
    width: "100%",
    flex: 1,
    resizeMode:"stretch",
    flexDirection: "column",
    justifyContent: "center"
  },

  viewStyle: {

    width: "90%", flexDirection: 'row',
    height: 40, borderColor: 'black', borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,.2)',
    paddingLeft: 10, margin: 10,
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#EAB15A",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },

  textStyle: {
    color: "white",
    fontSize: 16,
    width: "80%",
    height: 40,
    padding: 10,
    textAlign: "center",
  },


});