

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
let websiteId
let redirectUrl
let args
let args2
class NOSActions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectUrl: "Enter a redirect Url",
            websiteId: "Enter a domain name"
        }
    }
    handleAlert = async func => alert(await func);
    handleWebsite(e) {
        this.setState({
            websiteId: e.target.value
        });
    }
    handleRedirect(e) {
        this.setState({
            redirectUrl: e.target.value
        });
    }

    handleGet(invoke2){

        console.log("handle get");
        // console.log(JSON.stringify(this.state));
        console.log(JSON.stringify(invoke2));

        this.props.nos.testInvoke(invoke2)
        .then(
            txid => {
                var x={"message":txid};

                console.log(JSON.stringify(txid));
                alert(`Invoke tx id: ${txid}`)
            }

        ).catch(
            err => alert(`Error: ${err.message}`)
        )
    }

    waitAnswer(scriptHash) {
        console.log('waitAnswer');
        const interval = setInterval(async () => {
            try {
                const itemAnswer = await this.props.nos.getStorage({
                    scriptHash,
                    key: 'key-1'
                });
            } catch (e) {
                console.log('hello from eee', e);
                console.error("wait winner error:", e);
            }
        }, 2000);
    };


    handleClaimGas = () =>
        this.props.nos
            .claimGas()
            .then(alert)
            .catch(alert);

    render() {
        const {
            classes,
            nos
        } = this.props;

        const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
        const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
        const rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";

        // Add your smart contract's scriptHash here
        // const scriptHash = "e60a3fa8149a853eb4dff4f6ed93c931646a9e22";
        // const scriptHash = "e60a3fa8149a853eb4dff4f6ed93c931646a9e22";
        // const scriptHash = "835f0196aa7d3aa4583ff23ac0b8244ebb30333d";
        // const scriptHash = "9775d6eade20a5289a6703ebcf94de90ebfd3ffb";
        // const scriptHash ="86d58778c8d29e03182f38369f0d97782d303cc0";
        const scriptHash ="09b04d38a920d39c9d13185f93d0f12ebcf0b71a";
        // "0x09b04d38a920d39c9d13185f93d0f12ebcf0b71a"

// testinvoke 09b04d38a920d39c9d13185f93d0f12ebcf0b71a X2Domain ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo']


        // The operation of your smart contract you want to (test)invoke
        const operation = "RegisterDomain";
        // const operation2 = "GetDomain";
        const operation2 = "mul";

        // The necessary arguments for you (test)invoke
        args = ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', this.state.websiteId, this.state.redirectUrl, 'AMrLse3suPd123HjSanwefCC5WQZPmjDYv'];
        // args2 = ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', this.state.websiteId];
        args2 = [10, 2];
        // args2 = ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'naji.nos'];

        // The storagekey you want to query
        const key = "";

        // The amount and recipient of your send function
        const recipient = "";
        const amount = "";

        const invoke = {
            scriptHash,
            operation,
            args
        };

        const invoke2 = {
            scriptHash,
            'operation':operation2,
            'args':args2
        };
        return ( <
            React.Fragment >
            <form className = {classes.aligment} >
                <input value = {this.state.websiteId}
                       onChange = {this.handleWebsite.bind(this)}
                       className = {classes.input}
                       type = "text"
                       name = "websiteId" />
                <br/>
                <input value = {this.state.redirectUrl}
                       onChange = {this.handleRedirect.bind(this)}
                       className = {classes.input}
                       type = "text"
                       name = "redirectUrl" />
                <br / >
            </form>
            <button className = {classes.button}
                    onClick = {() => this.handleAlert(
                        this.props.nos.invoke(invoke)
                        .then(
                            txid => {
                                var x={"message":txid};

                                console.log(JSON.stringify(txid));
                                alert(`Invoke tx id: ${txid}`)
                            }

                        ).catch(
                            err => alert(`Error: ${err.message}`)
                        )

                        )
                    } >
                Register Domain xx <
                /button> 



                            <button className = {classes.button}
                    onClick = {() => this.handleAlert(
                        this.props.nos.testInvoke(invoke2)
                        .then(
                            txid => {
                                var x={"message":txid};

                                console.log(JSON.stringify(txid));
                                alert(`Invoke tx id: ${txid}`)
                            }

                        ).catch(
                            err => alert(`Error: ${err.message}`)
                        )

                        )
                    } >
                get Domain xx <
                /button> 


                <button className = {classes.button}
                    onClick = {
                        () => this.handleGet(invoke2)
                    } >
                handle get 
                </button> 

                <button className = {classes.button}
                    onClick = {
                        () => this.waitAnswer(scriptHash)
                    } >
                wait answer 
                </button> 




                 < /
                React.Fragment >
                );
                }
                }

                NOSActions.propTypes = {
                classes: PropTypes.objectOf(PropTypes.any).isRequired,
                nos: nosProps.isRequired
            };

                export default injectNOS(injectSheet(styles)(NOSActions));