import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import { create as createJss } from "jss";
import camelCase from "jss-camel-case";
import globalStyles from "jss-global";
import vendorPrefixer from "jss-vendor-prefixer";
import { JssProvider } from "react-jss";

import App from "./views/App";

const jss = createJss();
jss.use(vendorPrefixer(), camelCase(), globalStyles());

console.log("hahaha");

// const nos = window.NOS.V1;

// const NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
// const GAS = '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7';
// const RPX = 'ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9';

// const scriptHash = '2f228c37687d474d0a65d7d82d4ebf8a24a3fcbc';
// const operation = '9937f74e-1edc-40ae-96ad-1120166eab1b';
// const args = ['ef68bcda-2892-491a-a7e6-9c4cb1a11732'];

ReactDOM.render(
  <JssProvider jss={jss}>
    <App />
  </JssProvider>,
  document.getElementById("root")
);
