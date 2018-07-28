import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import Header from "./../../components/Header";
import NOSActions from "./../../components/NOSActions";
import Comment from "./../../components/Comment";


// <Header title="A nOS dApp starter-kit!" />

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

const App = ({ classes }) => (
  <div className={classes.App}>
    
    <p className={classes.intro}>
      <h1>We Are here</h1>
    </p>
    <p className={classes.intro}>The best comment Framewrok on NOS!</p>
    <hr className={classes.lineBreak} />
    
    <Comment />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
