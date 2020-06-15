import React from 'react';
import {Text, View} from 'react-native';
import Header from './components/Header'
import AlbumList from './components/AlbumList';

const App = () => {
    return (
      <View style = {{flex:1}}>
        <Text>From App</Text>
        <Header headerText={'Albums'}/>
        <AlbumList/>
      </View>
    );
};

export default App;