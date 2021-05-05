import React,{useState,useEffect,useRef} from 'react'
import './Player.css'

import PlayBlack from '../../assets/player/play-black.png';
import PauseBlack from '../../assets/player/pause-black.png';
import Shuffle from '../../assets/player/shuffle.png';
import ShuffleGreen from '../../assets/player/shuffle-green.png';
import Loop from '../../assets/player/loop.png';
import LoopGreen from '../../assets/player/loop-green.png';
import LoopSingleGreen from '../../assets/player/loop-single-green.png';
import Previous from '../../assets/player/previous.png';
import Next from '../../assets/player/next.png';

import {useSelector} from 'react-redux'

const Player = (props) => {
    //player control
    const controlObject={
        play:false,
        shuffle:false,
        loop:false,
        loopSingle:false,
    }
    const [controls,setControls]= useState(controlObject)

    const [audio,setAudio] = useState(new Audio("http://localhost:3030/stream/1"));
    const trackMeta = useSelector((state)=>state.player.details);

    useEffect(()=>{
        audio.addEventListener('ended',()=>{})
        return (
            audio.removeEventListener('ended',()=>{
                //pauseButtonClicked()
            })
        )
    },[audio.ended])

    const playButtonClicked=()=>{
        audio.play()
        showStartTime()
        setSliderPositionByProgress()
        let controlObject={  
            play:true,
            shuffle:controls.shuffle,
            loop:controls.loop,
            loopSingle:controls.loopSingle
        }
        setControls(controlObject)
    }

    const pauseButtonClicked=()=>{
        audio.pause()
        let controlObject={
            play:false,
            shuffle:controls.shuffle,
            loop:controls.loop,
            loopSingle:controls.loopSingle
        }
        setControls(controlObject)
    }

    function setCurrentTimeByDrag(){
        //set audio.currentTime
        audio.currentTime = parseInt((audio.duration * slider)/100)
    }

    function setSliderPositionByProgress(){
        setInterval(()=>{
            setSlider((audio.currentTime*100)/audio.duration);
        },1000)
    }

    //progress bar
    const [slider,setSlider] = useState(0);
    const  progress = useRef();
    const [startTime,setStartTime]=useState("0:00");
    const handler = ()=>{
        // if(controls.play!=true){
        //     playButtonClicked()
        // }
        // setSlider(progress.current.value)
        // // setSliderPositionByProgress()
        // setCurrentTimeByDrag()
        // playButtonClicked()
    }

    //toggles
    const toggleShuffleButton=()=>{
        let controlObject={
            play:controls.play,
            shuffle:!controls.shuffle,
            loop:controls.loop,
            loopSingle:controls.loopSingle
        }
        setControls(controlObject);
    }

    const toggleLoopButton=()=>{
        let controlObject={
            play:controls.play,
            shuffle:controls.shuffle,
            loop:controls.loop,
            loopSingle:controls.loopSingle
        }
        if(controls.loop===true && controls.loopSingle===false){
            controlObject.loopSingle=true
        }else if(controls.loop===true && controls.loopSingle===true){
            controlObject.loop=false
            controlObject.loopSingle=false
        }else if(controls.loop===false && controls.loopSingle===false){
            controlObject.loop=true
        }
        setControls(controlObject)
    }

    function formatTime(timeString){
        let currentTime = timeString;
        let minutes = parseInt(currentTime/60);
        let seconds = parseInt(currentTime%60);
        if(seconds<10){
            seconds="0"+seconds
        }
        return minutes+":"+seconds
    }

    const showStartTime=()=>{
        setInterval(()=>{
            setStartTime(formatTime(audio.currentTime));
        },1000)
    }

    return (
        <div className={props.show?"player-container":"hide"}>
            <div className="track-avatar"></div>
            <div className="track-info">
                <div className="track-title">{trackMeta.title}</div>
                <div className="tract-meta">{trackMeta.meta}</div>
            </div>
            <div className="track-controls"> 
                <div className="controls">
                    <button className={controls.shuffle?"hide":"controls-secondary"} onClick={toggleShuffleButton}><img className="icon-ternary shuffle" src={Shuffle} alt=""/></button>
                    <button className={controls.shuffle?"controls-secondary":"hide"} onClick={toggleShuffleButton}><img className="icon-ternary shuffle" src={ShuffleGreen} alt=""/></button>
                    <button className="controls-primary blink"><img className="icon-secondary" src={Previous} alt=""/></button>
                    <button className={controls.play===false?"controls-primary mid active-function":"hide"} onClick={playButtonClicked}><img className="icon-primary" src={PlayBlack} alt=""/></button>
                    <button className={controls.play===true?"controls-primary mid active-function":"hide"} onClick={pauseButtonClicked}><img className="icon-primary" src={PauseBlack} alt=""/></button>
                    <button className="controls-primary blink"><img className="icon-secondary next" src={Next} alt=""/></button>
                    <button className={controls.loop===false && controls.loopSingle===false ?"controls-secondary":"hide"} onClick={toggleLoopButton}><img className="icon-ternary loop" src={Loop} alt=""/></button>
                    <button className={controls.loop===true && controls.loopSingle===false ?"controls-secondary":"hide"} onClick={toggleLoopButton}><img className="icon-ternary loop" src={LoopGreen} alt=""/></button>
                    <button className={controls.loop===true && controls.loopSingle===true ?"controls-secondary":"hide"} onClick={toggleLoopButton}><img className="icon-ternary loop" src={LoopSingleGreen} alt=""/></button>
                </div>
                <div className="track-progress">
                    <div className="track-container">
                        <div className="track-time">{startTime}</div>
                            <input type="range" min="0" max="100" ref={progress} onChange={handler} value={slider} className="slider"/>
                        <div className="track-time">{formatTime(audio.duration)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
