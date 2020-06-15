import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Title from './Title';
import AlbumDetail from './AlbumDetail';
import albumsApi from '../api/albumsApi';

export default class AlbumList extends Component {
    state = {
        albums:[],
        isEmpty: false,
    }

    componentDidMount(){
        try{
            const response = albumsApi.get('/')
            .then(response => this.setState(
                {
                    albums: response.data, 
                    isEmpty: true
                }))
        } catch (err){
            console.err(err);
        }
    }

    render(){
        const {albums, isEmpty} = this.state;
        console.log('Albums',albums);
        const albumsList = albums.map(album => 
            <AlbumDetail key={album.title} album = {album} />
        )
        return (
            <View>
                {(!isEmpty) ? <Text>Data loading...</Text> :
                    albumsList
                }
            </View>
        )
    }
}
