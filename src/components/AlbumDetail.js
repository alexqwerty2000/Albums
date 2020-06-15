import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Card from './Card';

const AlbumDetail = ({album}) => {
    return (
        <View>
            <Text>{album.title}</Text>
            <Card/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default AlbumDetail;