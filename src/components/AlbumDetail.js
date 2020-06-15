import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const AlbumDetail = ({album}) => {
    return (
        <View>
            <Text>{album.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default AlbumDetail;