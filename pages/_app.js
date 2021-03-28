/*!

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import './styles.css'

import MainContext from '../components/context'
import UseContext from '../components/userContext'
//import {AnimatePresence} from 'framer-motion'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import PageChange from "components/PageChange/PageChange.js";

import 'slick-carousel/slick/slick.css'
//import "slick-carousel/slick/slick-theme.css"
import {CookiesProvider} from 'react-cookie'
//import "assets/scss/nextjs-material-kit.scss?v=1.1.0";
import "assets/css/bootstrap.min.css";
import "assets/css/black-dashboard-react.min.css"
//import "assets/css/black-dashboard-react.css.map"
//import "assets/scss/black-dashboard-react.scss";
import "assets/css/black-dashboard-react.css"
//import "assets/demo/demo.css";
//import "assets/css/nucleo-icons.css";


Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
       <MainContext>
          <UseContext>
          <GoogleReCaptchaProvider reCaptchaKey='AIzaSyDtwQRXmpTZd6d7ioJcVhJp_C-zAdQOynE'>
            <CookiesProvider>
            <Head>
          <title>Winstor Invest</title>
          </Head>
          
        <Component {...pageProps} />
            </CookiesProvider>
          </GoogleReCaptchaProvider>
        </UseContext>
       </MainContext>
      </React.Fragment>
    );
  }
}
