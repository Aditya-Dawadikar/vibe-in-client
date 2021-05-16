import {createSlice} from '@reduxjs/toolkit'

export const myTracksSlice = createSlice({
    name:"myTracks",
    initialState:{
        tracks: []
    },
    reducers:{
        setTrack:(state,action)=>{
            state.tracks = action.payload
        }
    }
})

export const {setTrack} = myTracksSlice.actions
export default myTracksSlice.reducer