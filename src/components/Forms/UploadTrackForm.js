import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
// import './Forms.css'
import '../Style.css'
import Chip from '@material-ui/core/Chip';

const UploadTrackForm = () => {
    let tagArray=[]
    const [tags,tagSetter] = useState(tagArray)
    let showTags=true
    const [tagsShow,tagShowSetter]=useState(showTags)
    let creditArray=[]
    const [credits,creditSetter] = useState(creditArray)
    let showCredits=true
    const [creditsShow,creditShowSetter]=useState(showCredits)
    
    //form input
    const [tagInput,tagInputSetter] = useState("")
    const [creditInput,creditInputSetter] = useState("")
    const [nameInput,nameInputSetter] = useState("")

    const handleTag=(e)=>{
        tagInputSetter(e.target.value)
    }
    const handleCredit=(e)=>{
        creditInputSetter(e.target.value)
    }
    const handleName=(e)=>{
        nameInputSetter(e.target.value)
    }

    const handleAddTag=()=>{
        let newTags=tags
        newTags.push(tagInput)
        tagSetter(newTags)
        if(newTags.length>=1){
            tagShowSetter(true)
        }
        tagInputSetter("")
    }

    const handleAddCredit=()=>{
        let newCredits=credits
        newCredits.push(creditInput)
        creditSetter(newCredits)
        if(newCredits.length>=1){
            creditShowSetter(true)
        }
        creditInputSetter("")
    }

    const handleTagDelete=(tag)=>{
        let newTags=tags.filter(function(elem){
            return tag!==elem
        })
        tagSetter(newTags)
        if(newTags.length<1){
            tagShowSetter(false)
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

    const formSubmitHandler=(e)=>{
        let formObject = {
            trackName:nameInput,
            tags:tags,
            credits:credits
        }
        console.log(formObject)
        e.preventDefault()
    }

    return (
        <div className="form-container-inner">
            <Form>
                    <Form.Group controlId="formGroupTrack">
                        <Form.Label>Upload a track</Form.Label>
                        <Form.Control name="file" type="file" />
                    </Form.Group>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="trackName" onChange={handleName} type="text" placeholder="track name..." />
                    </Form.Group>
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
                                        return <li className="tag" key={index} ><Chip label={tag} onDelete={()=>{handleTagDelete(tag)}} color="primary" className="tag-chip"/></li>
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

export default UploadTrackForm
