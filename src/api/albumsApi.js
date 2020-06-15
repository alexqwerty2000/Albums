 import axios from 'axios';

 export default axios.create ({
    baseURL: 'https://rallycoding.herokuapp.com/api/music_albums'
 })