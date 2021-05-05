import {createSlice} from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name:"player",
    initialState:{
        track: null,
        details:{}
    },
    reducers:{
        setTrack:(state,action)=>{
            state.track = action.payload
        },
        setTrackDetails:(state,action)=>{
            state.details=action.payload
        }
    }
})

export const {setTrack, setTrackDetails} = playerSlice.actions
export default playerSlice.reducer