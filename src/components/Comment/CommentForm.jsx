import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import {
    react
} from "@nosplatform/api-functions";

const {
    injectNOS,
    nosProps
} = react.default;

//0.011875


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
let commentWriter
let commentText

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentWriter: "",
            commentEmail: "",
            commentText: ""
        }

        this.submitComment = this.submitComment.bind(this);
    }
    handleCommentWriter(e) {
        this.setState({
            commentWriter: e.target.value
        });
    }
    handleCommentText(e) {
        this.setState({
            commentText: e.target.value
        });
    }
    handleEmail(e) {
        this.setState({
            commentEmail: e.target.value
        });
    }

    submitComment(e) {
        this.props.addCommentFn(this.state.commentWriter, this.state.commentEmail ,this.state.commentText)
    }



    render() {
        const {
            classes,
            nos
        } = this.props;

        
        return ( 
            <React.Fragment >
                <form className = 'commentForm' >
                    <h4 className='formHeader'>Please Enter Your Comment</h4>
                    <input value = {this.state.commentWriter}
                        placeHolder = 'Please Enter Your Name'
                           onChange = {this.handleCommentWriter.bind(this)}
                           className = 'commentAother'
                           type = "text"
                           name = "commentWriter" />
                    <br/>
                    <input value = {this.state.commentEmail}
                        placeHolder = 'Please Enter Your Email'
                           onChange = {this.handleEmail.bind(this)}
                           className = 'commentAother'
                           type = "text"
                           name = "commentWriter" />
                    <br/>
                    <textarea value = {this.state.commentText}
                            placeHolder = 'Please Enter Your Comment'
                           onChange = {this.handleCommentText.bind(this)}
                           className = 'commentText'
                           type = "text"
                           name = "commentText" />
                    <br / >

                    {/*{this.submitComment}*/}
                        <button className = 'submitBtn'
                            onClick = {e => (e.preventDefault(), this.submitComment())}
                            // onClick = {this.props.addCommentFn(3,4)}

                        >
                            Add Comment
                        </button> 
                </form>

                 </React.Fragment >
        );
    }
                }

CommentForm.propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(CommentForm));