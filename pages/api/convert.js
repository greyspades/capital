const price=require('crypto-price')

const convert=async(req,res)=>{

    price.getCryptoPrice('USD','BTC').then(obj => { // Base for ex - USD, Crypto for ex - ETH 
        res.send(obj.price)
    }).catch(err => {
        console.log(err)
    })
}
export default convert