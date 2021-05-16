import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
// import './Forms.css'
import '../Style.css'

import Chip from '@material-ui/core/Chip'

import {useSelector} from 'react-redux'

const CreateAlbumForm = () => {
    //toggleing views for dropdown,tag,credit and track list
    let tagArray=[]
    const [tags,tagSetter] = useState(tagArray)
    let showTags=true
    const [tagsShow,tagShowSetter]=useState(showTags)
    let creditArray=[]
    const [credits,creditSetter] = useState(creditArray)
    let showCredits=true
    const [creditsShow,creditShowSetter]=useState(showCredits)
    let showTracks=true
    const [tracksShow,trackShowSetter]=useState(showTracks)
    let showDropDown=false;
    const [dropDownShow,dropDownShowSetter] = useState(showDropDown)
    //input tracks from the store
    let trackArray=[]
    const [tracks,trackSetter] = useState(trackArray)

    //form input
    const [tagInput,tagInputSetter] = useState("")
    const [creditInput,creditInputSetter] = useState("")
    const [nameInput,nameInputSetter] = useState("")
    const [trackSelected,trackSelectedSetter]=useState([])

    //getting input from input fields
    const handleTag=(e)=>{tagInputSetter(e.target.value)}
    const handleCredit=(e)=>{creditInputSetter(e.target.value)}
    const handleName=(e)=>{nameInputSetter(e.target.value)}
    const handleTrack=(e)=>{trackSelectedSetter(e.target.value)}

    //load track for selection
    let trackLoader=useSelector(state=>state.myTracks.tracks)
    const initializer=()=>{
        trackSetter(trackLoader);
    }
    useEffect(()=>{
        initializer()
    },[trackLoader])

    //toggle dropdow
    const dropDownHandler=(e)=>{
        e.preventDefault()
        dropDownShowSetter(!dropDownShow)
    }

    //handling tags
    const handleAddTag=()=>{
        if(tagInput!==""){
            let newTags=tags
            newTags.push(tagInput)
            tagSetter(newTags)
            if(newTags.length>=1){
                tagShowSetter(true)
            }
            tagInputSetter("")
        }
    }
    const handleTagDelete=(tag,index)=>{
        let newTags=tags
        newTags.splice(index)
        tagSetter(newTags)
        if(newTags.length<1){
            tagShowSetter(false)
        }
    }

    //handling credits
    const handleAddCredit=()=>{
        if(creditInput!==""){
            let newCredits=credits
            newCredits.push(creditInput)
            creditSetter(newCredits)
            if(newCredits.length>=1){
                creditShowSetter(true)
            }
            creditInputSetter("")
        }
    }
    const handleCreditDelete=(tag)=>{
        let newCredits=credits.filter(function(elem){
            return tag!==elem
        })
        creditSetter(newCredits)
        if(newCredits.length<1){
            creditShowSetter(false)
        }
    }

    //handling track selection
    const handleAddTrack=(track,index)=>{
        let optionTracks=tracks.filter((elem)=>{
            return elem.title!==track.title
        })
        trackSetter(optionTracks)
        
        let newTracks=trackSelected.filter(elem=>{
            return elem
        })
        if(!newTracks.includes(track)){
            newTracks.push(track)
        }
        trackSelectedSetter(newTracks)
        if(trackSelected.length>=1){
            trackShowSetter(true)
        }
        dropDownShowSetter(false)
    }
    const handleTrackDelete=(tag,index)=>{
        let optionTracks = tracks
        if(!optionTracks.includes(tag)){
            optionTracks.push(tag)
        }
        trackSetter(optionTracks)

        let newTrack=trackSelected
        newTrack.splice(index,1)
        trackSelectedSetter(newTrack)
        if(newTrack.length<1){
            trackShowSetter(false)
        }
        // dropDownShowSetter(false)
    }

    //handling for submit
    const formSubmitHandler=(e)=>{
        let formObject = {
            albumName:nameInput,
            trackSelected:trackSelected,
            tags:tags,
            credits:credits
        }
        console.log(formObject)
        e.preventDefault()
    }

    return (
        <div className="form-container-inner">
            <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control name="albumName" onChange={handleName} type="text" placeholder="track name..." />
                    </Form.Group>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Select Tracks</Form.Label>  
                        <div className="flex-input"><input className="form-control" placeholder="select tracks..."></input><Button onClick={(e)=>{dropDownHandler(e)}}>+</Button></div>
                        <ul className={dropDownShow?"track-list":"hide"}>
                            {
                                tracks.map((track,index)=>{
                                return <li key={index} className="track-name" onClick={()=>{handleAddTrack(track,index)}}>{track.title}</li>
                            })}
                        </ul>                
                    </Form.Group>
                    <div className={tracksShow?"tag-container":"hide"}>
                        <div className="form-container-inner">
                            <ul className="tag-list">
                                {
                                    trackSelected.map((tag,index)=>{
                                        return <li className="tag" key={index} ><Chip label={tag.title} onDelete={()=>{handleTrackDelete(tag,index)}} color="primary" className="tag-chip"/></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <Form.Group controlId="formGroupTag">
                        <Form.Label>Tags</Form.Label>
                        <div className="flex-input">
                            <Form.Control onChange={handleTag} name="trackName" type="text" placeholder="Add tags..." />
                            <Button variant="primary" onClick={handleAddTag}>+</Button>
                        </div>
                    </Form.Group>
                    <div className={tagsShow?"tag-container":"hide"}>
                        <div className="form-container-inner">
                            <ul className="tag-list">
                                {
                                    tags.map((tag,index)=>{
                                        return <li className="tag" key={index} ><Chip label={tag} onDelete={()=>{handleTagDelete(tag,index)}} color="primary" className="tag-chip"/></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <Form.Group controlId="formGroupCredits">
                        <Form.Label>Credits</Form.Label>
                        <div className="flex-input">
                            <Form.Control onChange={handleCredit} name="trackName" type="text" placeholder="Add credits..." />
                            <Button variant="primary" onClick={handleAddCredit}>+</Button>
                        </div>
                    </Form.Group>
                    <div className={creditsShow?"tag-container":"hide"}>
                        <div className="form-container-inner">
                            <ul className="tag-list">
                                {
                                   credits.map((tag,index)=>{
                                        return <li className="tag" key={index}><Chip label={tag} onDelete={()=>{handleCreditDelete(tag)}} color="primary"  className="tag-chip"/></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <Button variant="primary" type="submit" onClick={formSubmitHandler}>Submit</Button>
            </Form>
        </div>
    )
}

export default CreateAlbumForm
