import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
const { rpc, u } = require('@cityofzion/neon-js');
import {
    react
} from "@nosplatform/api-functions";

const {
    injectNOS,
    nosProps
} = react.default;

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const styles = {
  "@import": "https://fonts.googleapis.com/css?family=Source+Sans+Pro",
  "@global html, body": {
    fontFamily: "Source Sans Pro",
    margin: 0,
    padding: 0,
    backgroundColor: "#ffffff"
  },
  App: {
    textAlign: "center"
  },
  intro: {
    fontSize: "large"
  },
  lineBreak: {
    width: "75%",
    borderTop: "1px solid #333333",
    margin: "32px auto"
  }
};

const scriptHashInternal = "8adddd373b6f98b35927f13901f16a9cc38aacf7";

class Comments extends React.Component {

    constructor(props){
        super();
        this.state = {
            comments: [
              { id: '1', author: 'auther 1', text: 'comment from the array'},
              { id: '2', author: 'auther 2', text: 'text text text text'}
          ],
            scriptHash:'8adddd373b6f98b35927f13901f16a9cc38aacf7',
            'id':3134
        }
        this.addComment = this.addComment.bind(this);
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentDidMount() {
        // TODO: Uncomment this to fetch initial comments.
        this.fetchComments()
    }


    QueryLatestSavedCommentAttributes() {
        // becuase its not functioning at the mean time.
        return;
        console.log('Quering the comment');
        const interval = setInterval(async () => {
            try {

                const opponentHashKey = u.str2hexstring(`new_comment_id`);
                const itemAnswer = await this.props.nos.getStorage({
                    scriptHash: scriptHashInternal,
                    key: opponentHashKey
                });
            } catch (e) {
                console.log('hello from eee' + e.toString());
                console.error("wait winner error:" + e.toString());
            }
        }, 2000);

        // const opponentHashKey = `new_comment_id`;
        // const response = await props.nos.getStorage(scriptHash: scriptHashInternal, key: opponentHashKey);
        // if (!response) {
        //     throw new Error('Not found.');
        // }
        //
        // const target = u.hexstring2str(response);
        // console.log('hello from eee' + target);
    };

    fetchComments(){


        const args = [this.state.id++];

        const operation = 'GetComment'
        // const operation = 'sum'

        const testInvokeData= {
            'scriptHash':this.state.scriptHash,
            'operation':operation,
            'args':args
        };

        this.QueryLatestSavedCommentAttributes();

        // const interval = setInterval(async () => {
        //     try {
        //         const itemAnswer = await this.props.nos.getStorage({
        //             'c77194e0152042c3fc8f28336183302a03d8acf7',
        //             key: 'new_comment_id'
        //         });
        //     } catch (e) {
        //         // console.log('hello from 1', e.toString());
        //         console.log("wait winner 1:", e);
        //     }
        // }, 2000);

        // this.props.nos.testInvoke(testInvokeData)
        // .then(
        //     txid => {
        //         var x={"message":txid};
        //         this.setState({comments:[...this.state.comments.slice(), JSON.stringify(txid)]});
        //         console.log(JSON.stringify(txid));
        //         alert(`Invoke tx id: ${txid}`)
        //     }
        //
        // ).catch(
        //     err => alert(`Error: ${err.message}`)
        // )
    }

    addComment(author, email, commentText){
 

        const operation = "PostComment";
  
        const args = [author, email, commentText, ''];

        const invokeX = {
            'scriptHash':this.state.scriptHash,
            operation,
            args
        };
        this.props.nos.invoke(invokeX)
             .then(
                txid => {
                        var x={"message":txid};

                        console.log(JSON.stringify(txid));
                        this.fetchComments();
                         alert(`Invoke tx id: ${txid}`)
                    }

                ).catch(
                    err => alert(`Error: ${err.message}`)
                )


        // this.setState({comments:[...this.state.comments.slice(), obj]});
    }

    render(){
      
        return (
            <div className='commentContainer'>
             <CommentList comments={this.state.comments} />
             <CommentForm addCommentFn={this.addComment} />

            </div>
        )
    }
}



Comments.propTypes = {
  classes: PropTypes.object.isRequired,
  nos: nosProps.isRequired
};

// export default injectSheet(styles)(Comments);
export default injectNOS(injectSheet(styles)(Comments));
