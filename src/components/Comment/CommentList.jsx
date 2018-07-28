import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import {
    react
} from "@nosplatform/api-functions";

import Comment from "./Comment";


const {
    injectNOS,
    nosProps
} = react.default;



const styles = {
    button: {
        margin: "16px",
        fontSize: "14px"
    },
    aligment: {
        textAlign: "center",
    },
    input: {
        width: "50%",
        paddingLeft: "50px"
    },
    fieldname: {
        width: "50%"
    },

};

class CommentList extends React.Component {
	render(){
        console.log('comment list ')
		console.log(this.props.comments)
		var commentNodes = this.props.comments
			.map(function(comment){
				return (
					<Comment author={comment.author} key={comment.id}>
						{comment.text}
					</Comment>
				);
			});
		return (
			<div className='comment-list'>
					{commentNodes}
			</div>
		);
	}
}

CommentList.propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(CommentList));