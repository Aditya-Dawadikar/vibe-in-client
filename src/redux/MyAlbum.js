import {createSlice} from '@reduxjs/toolkit'

export const myAlbumsSlice=createSlice({
    name:"myAlbums",
    initialState:{
        albums:{
            bannerName:"Pop Music",
            albums:[
                {
                    title:"The weeknd",
                    credits:"Abel"
                },{
                    title:"Ultraviolence",
                    credits:"Lana del rey"
                },
                {
                    title:"HybridTheory",
                    credits:"Linkin Park"
                }
            ]
        }
    },
    reducers:{
        setAlbum:(state,action)=>{
            state.albums=action.payload
        }
    }
})

export const {setAlbum} = myAlbumsSlice.actions
export default myAlbumsSlice.reducer
