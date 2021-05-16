import {configureStore} from '@reduxjs/toolkit'
import myTracksReducer from './MyTracks'
import myAlbumsReducer from './MyAlbum'
import playerReducer from './Player'

export default configureStore({
    reducer:{
        myTracks:myTracksReducer,
        myAlbums:myAlbumsReducer,
        player:playerReducer
    }
})