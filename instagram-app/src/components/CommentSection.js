import React from "react";
import "./CommentSection.css"

function CommentSection(props){
    return ( 
            <div> 
                {props.comments.map(renderComment)} 
                <input className="add-comment" placeholder="Add a comment..." />
            </div> )
}

function renderComment(props, index){
    console.log(props)
    return (
        <div key={index*100} className="comment-section">
            <span className="comment-user-name">{props.username}</span>
            <span className="comment-content">{props.text}</span>
        </div>
    )
}

export default CommentSection;