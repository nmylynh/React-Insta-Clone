import React from 'react'
import PropTypes from "prop-types"
import "./PostContainer.css"
import PostContainer from "../PostContainer/PostContainer"

export default function PostGrid(props){
    return props.posts.map(PostContainer)
}


PostGrid.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
}
