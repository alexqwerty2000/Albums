import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';

const Cards = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {textInput, buttonStyles} = styles;
  return(
    <View >
      <TextInput 
        style = {textInput}
        value={email}
        placeholder='Enter Email'
        onChangeText={setEmail}
      />
      <TextInput
        style = {textInput}
        value = {password}
        placeholder='Enter Password'
        onChangeText={setPassword}
      />
      <Button 
        style = {buttonStyles}
        title='Sign In' 
        onPress={() => onSubmit(email, pswd)}
      />
    </View>
  )
};

const styles = {
    authContainer: {
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        padding: 5,
        fontSize: 18
    },
    buttonStyles:{
        padding: 20,
        backgroundColor: 'blue',
        borderRadius: 5
    }
};

export default Cards;