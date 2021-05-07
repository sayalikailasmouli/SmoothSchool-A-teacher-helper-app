import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Modal, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import MainScreen from '../Screens/MainScreen';
import db from '../config';
import firebase from 'firebase';

class welcomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      emailId: '',
      password: '',
      isModalVisible: 'false',
      firstName: '',
      lastName: '',
      address: '',
      mobileNumber: '',
      confirmPassword: ''
    }
  }

  userSignUp = (emailId, password, confirmPassword) => {
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        db.collection('User').add({
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          mobile_number: this.state.mobileNumber,
          emailId: this.state.emailId,
          Address: this.state.address,
        });
        return alert('User Added Successfully', '', [
          { text: 'OK', onPress: () => this.setState({ isVisible: false }) },
        ]);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  }


  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate('MainScreen');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };




  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      ><View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>Registration</Text>
              <TextInput style={styles.formTextInput}
                placeholder={"First Name"}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text
                  })
                }}
              />

              <TextInput style={styles.formTextInput}
                placeholder={"Last Name"}
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text
                  })
                }}
              />

              <TextInput style={styles.formTextInput}
                placeholder={"Contact"}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    mobileNumber: text
                  })
                }}
              />

              <TextInput style={styles.formTextInput}
                placeholder={"Address"}
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text
                  })
                }}
              />

              <TextInput style={styles.formTextInput}
                placeholder={"Enter Email"}
                keyboardType={'email-address'}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text
                  })
                }}
              />

              <TextInput style={styles.formTextInput}
                placeholder={"Enter Password"}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text
                  })
                }}
              />

              <TextInput style={styles.formTextInput}
                placeholder={"Confirm Password"}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text
                  })
                }}
              />

              <View style={styles.container}>
                <TouchableOpacity style={styles.registerButton} onPress={() => {
                  this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                }}>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.container}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => {
                  this.setState({
                    "isModalVisible": false
                  })
                }}>
                  <Text style={styles.registerButtonText}>Cancle</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>

      </Modal>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {this.showModal()}
        </View>

        <View>
          <Image

            style={{ width: 200, height: 200 }}
            source={{ uri: 'https://media3.giphy.com/media/apyuTUQx1bYSPR9tzw/giphy.gif' }} />

        </View>

        <View>
          <Text style={styles.title}>Assignmentry</Text>
        </View>

        <View>
          <TextInput placeholder="abc@example.com"
            keyboardType='email-address'
            onChangeText={(text) => {
              this.setState({
                emailId: text
              })
            }}
            style={styles.loginBox}
          />

          <TextInput placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text
              })
            }}
            style={styles.loginBox}
          />


          <TouchableOpacity style={styles.button} onPress={() => {
            this.userLogin(this.state.emailId, this.state.password);
          }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.userSignUp(this.state.emailId, this.state.password);
          }}>


            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BE85',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: '300',
    paddingBottom: 30,
    color: '#ff3d00'
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#ff8a65',
    fontSize: 20,
    marginBottom: 10,
    paddingTop: 10
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: '#ff5722',
    margin: 50
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffff",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30
  },
  registerButtonText: {
    color: '#ff5722',
    fontSize: 15,
    fontWeight: 'bold'
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: "#ff9800",
    marginHorizontal: 'auto',
    marginVertical: 15,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,

  },
  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20
  }
})



export default welcomeScreen;