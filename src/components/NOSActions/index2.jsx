import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";

const { injectNOS, nosProps } = react.default;

const styles = {
  button: {
    margin: "16px",
    fontSize: "14px"
  }
};

class NOSActions extends React.Component {
  handleAlert = async func => alert(await func);


  // handleGetAddress = async () => alert(await this.props.nos.getAddress());

  handleClaimGas = () =>
    this.props.nos
      .claimGas()
      .then(alert)
      .catch(alert);

  render() {

          
    console.log("najiiiiii we are in NOSActions Class");
    const { classes, nos } = this.props;

    const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    const rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";

    console.log(nos);
    console.log("nos");
    // 6ark hash 7/18
    //"0xe60a3fa8149a853eb4dff4f6ed93c931646a9e22"

    // Add your smart contract's scriptHash here
    // const scriptHash = "9a309cfe03cead5b653bbb11f68ff6beced8f031";

    const scriptHash = "e60a3fa8149a853eb4dff4f6ed93c931646a9e22";
    // const scriptHash = "cbc34de068689c779452f23a0b6cb6846d9c0d72";
    // const scriptHash = "de088746d52d1bfbb0853019fc69bfe55d93999e";

    // The operation of your smart contract you want to (test)invoke
    // const operation = "";
    const operation = "RegisterDomain";

    // The necessary arguments for you (test)invoke
    // const args = [];
    const args = ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo', 'https://ihasabucket.com/', 'AMrLse3suPd123HjSanwefCC5WQZPmjDYv'];


    // The storagekey you want to query
    const key = "";

    // The amount and recipient of your send function
    const recipient = "";
    const amount = "";

    const invoke = { scriptHash, operation, args }; // and testInvoke
    const getStorage = { scriptHash, key };
    const send = { amount, asset: gas, recipient };

    return (
      <React.Fragment>
        <button className={classes.button} onClick={() => this.handleAlert(nos.getAddress())}>
          Get Address
        </button>
        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getBalance({ asset: neo }))}
        >
          Get NEO Balance
        </button>
        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getBalance({ asset: gas }))}
        >
          Get GAS Balance
        </button>
        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getBalance({ asset: rpx }))}
        >
          Get RPX Balance
        </button>

        <button className={classes.button} onClick={this.handleClaimGas}>
          Claim Gas
        </button>
        <button className={classes.button} onClick={() => this.handleAlert(nos.send(send))}>
          Send GAS to...
        </button>

        <button className={classes.button} onClick={() => this.handleAlert(nos.testInvoke(invoke))}>
          TestInvoke
        </button>
        
          <button
            className={classes.button}
            onClick={() => this.handleAlert(

              nos.invoke(invoke).then(txid => alert(`Invoke hh tx id: ${txid}`)).catch(err => alert(`Error: ${err.message}`))

              )}
          >
            Invoke Naji
          </button>
        
        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getStorage(getStorage))}
        >
          GetStorage
        </button>
      </React.Fragment>
    );
  }
}

NOSActions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));
