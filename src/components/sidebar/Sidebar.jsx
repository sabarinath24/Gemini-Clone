import React, { useState, useContext } from "react";
import "./Sidebar.css";
import {assets} from '../../assets/assets';
import { Context } from "../../context/Context";

const Sidebar = () =>{

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return(
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            <div className="top">
                <img onClick={() => setExtended(prev =>!prev)} className="menu" src={assets.menu_icon} alt="menu" />
                <div onClick={()=>{newChat()}} className="new_chat">
                    <img className="plus" src={assets.plus_icon} alt="plusIcon"/>
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended?<div className="recent">
                    <p className="recent_tittle">Recent</p>
                    {prevPrompts.map((item,index)=>{
                        return(
                            <div onClick={()=>loadPrompt(item)}className="recent_entry">
                                <img src={assets.message_icon} alt="message" />
                                <p>{item.slice(0,18)} ...</p>
                            </div>
                        )
                    })}
                    
                </div>:null}
                
            </div>
            <div className="bottom">
                <div className="bottom_item recent_entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar;

