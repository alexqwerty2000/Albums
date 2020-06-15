import React from 'react';
import {Text} from 'react-native';
import Header from './components/Header'
import AlbumList from './components/AlbumList';

const App = () => {
    return (
      <>
        <Text>From App</Text>
        <Header headerText={'Albums'}/>
        <AlbumList/>
      </>
    );
};

export default App;