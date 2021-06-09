import React,{useState,useContext,useEffect} from 'react'
//import {MyContext} from '../../components/context'
//import {Graph} from 'react-crypto-graph';
import Head from 'next/head'
import {
   
    Container,
   
} from "reactstrap"
//import ReactDom from 'react-dom'
//import TradingViewWidget from 'react-tradingview-widget';
//import Chart from 'react-google-charts'
//import ReactApexChart from 'apexcharts'
//import {Graph} from 'react-crypto-graph'

const Converter=()=>{
    const [main,setMain]=useState()
    return(
        <div>
            <Head>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html:`baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementsByTagName("script");
var embedder = scripts[ scripts.length - 1 ];
var cccTheme = {"General":{"background":"#000","priceText":"#fff"},"Currency":{"color":"#fff"}};
(function (){
var appName = encodeURIComponent(window.location.hostname);
if(appName==""){appName="local";}
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
var theUrl = baseUrl+'serve/v3/coin/header?fsyms=BTC,ETH,XMR,LTC,DASH&tsyms=USD,EUR,CNY,GBP';
s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
embedder.parentNode.appendChild(s);
})();`}} />
            </Head>
            <h2>
                To infinity
            </h2>
        </div>
    )

}
export default Converter