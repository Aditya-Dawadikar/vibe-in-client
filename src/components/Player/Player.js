import React,{useState,useEffect,useRef} from 'react'
// import './Player.css'
import '../Style.css'

import PlayBlack from '../../assets/player/play-black.png';
import PauseBlack from '../../assets/player/pause-black.png';
import Shuffle from '../../assets/player/shuffle.png';
import ShuffleGreen from '../../assets/player/shuffle-green.png';
import Loop from '../../assets/player/loop.png';
import LoopGreen from '../../assets/player/loop-green.png';
import LoopSingleGreen from '../../assets/player/loop-single-green.png';
import Previous from '../../assets/player/backward-white.png';
import Next from '../../assets/player/forward-white.png';

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

    const [audio,setAudio] = useState(new Audio());

    const track= useSelector((state)=>state.player);
    useEffect(()=>{
        //setAudio(new Audio(track.url));
    },[])

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
        //showStartTime()
        //setSliderPositionByProgress()
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

    return (
        <div className="player-container">
            <div className="left">
                <div className="player-cover"></div>
                <div className="player-info">
                    <div className="player-title">Liar</div>
                    <div className="player-credits">Camila Cabelo</div>
                </div>
            </div>
            <div className="right">
                <div className="player-controls">
                    <img className="player-control-icon next-prev" src={Previous} alt="#" />
                    <img className={controls.play?"hide":"player-control-icon play-pause"} src={PlayBlack} onClick={()=>{playButtonClicked()}} alt="#" />
                    <img className={controls.play?"player-control-icon play-pause":"hide"} src={PauseBlack} onClick={()=>{pauseButtonClicked()}} alt="#" />
                    <img className="player-control-icon next-prev" src={Next} alt="#" />
                </div>
                <div className="player-progress">
                    <div className="player-time">0:00</div>
                    <input className="player-progress-input" type="range"/>
                    <div className="player-time">0:00</div>
                </div>
            </div>
        </div>
    )
}

/**
 *                  <button className={controls.shuffle?"hide":"controls-secondary"} onClick={toggleShuffleButton}><img className="icon-ternary shuffle" src={Shuffle} alt=""/></button>
                    <button className={controls.shuffle?"controls-secondary":"hide"} onClick={toggleShuffleButton}><img className="icon-ternary shuffle" src={ShuffleGreen} alt=""/></button>
                    <button className="controls-primary blink"><img className="icon-secondary" src={Previous} alt=""/></button>
                    <button className={controls.play===false?"controls-primary mid active-function":"hide"} onClick={playButtonClicked}><img className="icon-primary" src={PlayBlack} alt=""/></button>
                    <button className={controls.play===true?"controls-primary mid active-function":"hide"} onClick={pauseButtonClicked}><img className="icon-primary" src={PauseBlack} alt=""/></button>
                    <button className="controls-primary blink"><img className="icon-secondary next" src={Next} alt=""/></button>
                    <button className={controls.loop===false && controls.loopSingle===false ?"controls-secondary":"hide"} onClick={toggleLoopButton}><img className="icon-ternary loop" src={Loop} alt=""/></button>
                    <button className={controls.loop===true && controls.loopSingle===false ?"controls-secondary":"hide"} onClick={toggleLoopButton}><img className="icon-ternary loop" src={LoopGreen} alt=""/></button>
                    <button className={controls.loop===true && controls.loopSingle===true ?"controls-secondary":"hide"} onClick={toggleLoopButton}><img className="icon-ternary loop" src={LoopSingleGreen} alt=""/></button>
 */

export default Player
