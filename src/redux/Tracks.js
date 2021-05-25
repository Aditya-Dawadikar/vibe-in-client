import {createSlice} from '@reduxjs/toolkit'

export const TracksSlice = createSlice({
    name:"Tracks",
    initialState:{
        tracks: []
    },
    reducers:{
        setTracks:(state,action)=>{
            state.tracks = action.payload
        }
    }
})

export const {setTracks} = myTracksSlice.actions
export default myTracksSlice.reducer