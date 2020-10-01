import React from "react";
import reactemoji from "react-emoji";
import './Message.css';


const Message = ({message :{ user, text }, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase(); 
    if (user === trimmedName){
        isSentByCurrentUser = true;
    }


    return (
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">


                <div className="messageBox backgroundBlue">
                    {/*<span className="sentText pr-10">{trimmedName}</span>*/}
                    <span className="messageText colorWhite">
                        {reactemoji.emojify(text)}
                    </span>
                </div>
            </div>
        ):(
            <div className="messageContainer justifyStart">


                <div className="messageBox backgroundLight">
                    <span className="sentText pl-10">{user}</span>
                    <span className="messageText colorDark">
                        {reactemoji.emojify(text)}
                    </span>
                </div>

            </div>
        )
    )
}
export default Message