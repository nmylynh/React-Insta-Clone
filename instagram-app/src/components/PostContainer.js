import React from 'react';

function PostContainer(props){
    console.log(props)
    return (
            <>
            {props.dummyData.map( props =>
            <div className="card">
            <img src={props.thumbnailUrl} className="thumbnail-img" alt="thumbnail image"/>
            <div className="users-name"> {props.username} </div> 
            <img src={props.imageUrl} alt="post image" />     
             </div>
            )}
        </>
    )
}

export default PostContainer;