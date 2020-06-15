import React from 'react';
import {View,Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {cardContent, cardImage , containerStyle, textStyle, albumImage} = styles;
    return (
        <Card>
            <CardSection>
                <View style={containerStyle}>
                    <Image 
                        style={cardImage} 
                        source={{uri:thumbnail_image}}
                    />
                </View>
                <View style={cardContent}>
                    <Text style={textStyle}>{title}</Text>
                    <Text style={textStyle}>{artist}</Text>
                </View>
                
            </CardSection>
            <CardSection>
                <Image style ={albumImage} source ={{uri:image}}/>
            </CardSection>
            <CardSection>
                <Button 
                    onPress ={() => Linking.openURL(url) }>
                        Buy now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    containerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    cardImage:{
        width: 50,
        height: 50
    },
    cardContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle:{
        fontSize: 18
    },
    albumImage: {
        height: 300,
        flex:1,
        width: null,
    }
}

export default AlbumDetail;