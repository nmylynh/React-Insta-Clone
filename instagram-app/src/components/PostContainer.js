import React from 'react';
import "./PostContainer.css";

function PostContainer(props){
    return props.dummyData.map(renderPost)
}


function renderPost(props, index){
    return (
            <div key={index} className="card">
                <div className="post-header">
                    <img src={props.thumbnailUrl} className="thumbnail-img" alt="thumbnail"/>
                    <div className="users-name"> {props.username} </div> 
                </div>
                <img src={props.imageUrl} className="post-image" alt="post" />     
                <div className="user-interaction">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
            </div>
        )
}

export default PostContainer;