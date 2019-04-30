import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CommentSection.css"

class CommentSection extends Component {
    state = {
        comments: [],
        value: ""
    }

    handleChange = (e) => {
        this.setState({value: e.target.textContent})
    }
    
    render() {
        return ( 
            <div className="comment-section"> 
                {this.props.comments.map(renderComment)} 
                <span className="timestamp">{this.props.timestamp || Date.now()}</span> {/* I removed timestamp prop, so Date.now is temporary default */}
                <hr/>
                <input onChange={this.handleChange} className="add-comment"  ref="input" placeholder="Add a comment..." />

                
                <div style={{color:'red', border: 'red'}}>{this.state.value}</div>
            </div> 
        )
    }
}

function renderComment(props, index){
    return (
        <div key={index*100} className="comment">
            <span className="comment-user-name">{props.username}</span>
            <span className="comment-content">{props.text}</span>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;