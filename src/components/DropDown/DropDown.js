import React,{useState} from 'react'
import Menu from '../../assets/menu-white.png'
import '../Style.css'

const DropDown = (props) => {

    const [drop,toggle]=useState(false);
    
    const handler=()=>{
        console.log("here")
        toggle(!drop)
    }

    const modes=["edit","view"]
    if(props.mode===modes[0]){
        return (
            <div className="drop-down-container">
                <img src={Menu} onClick={()=>{handler()}} className="drop-down-menu" />
                <ul className={drop?"drop-down-ul":"hide"}>
                    <li className="drop-down-option">Update</li>
                    <li className="drop-down-option">Delete</li>
                </ul>
            </div>
        )
    }
    return (<div></div>)
    
}

export default DropDown
