import {createSlice} from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name:"player",
    initialState:{
        _id:"60926f193a9e7d0bb48d98d1",
        credits:["A","B"],
        tags:["a","b","c"],
        trackName:"track_1620209386113.mp3",
        url:"http://localhost:3030/stream/track_1620209386113.mp3",
        uploader:"60926eda3a9e7d0bb48d98d0"
    },
    reducers:{
        setTrack:(state,action)=>{
            state = action.payload
        }
    }
})

export const {setTrack} = playerSlice.actions
export default playerSlice.reducer