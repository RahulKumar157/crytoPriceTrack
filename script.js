var btn =document.getElementById("bitcoin");
var doge =document.getElementById("dogecoin");
var eth =document.getElementById("ethereum");



var settings ={
    "async ": true,
    "scrossDomain":true,
    "url":'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    "method":"GET",
    "headers":{}

}
$.ajax(settings).done(function(response){
  btn.innerHTML= response.bitcoin.usd;
  doge.innerHTML= response.dogecoin.usd;
  eth.innerHTML= response.ethereum.usd;

});