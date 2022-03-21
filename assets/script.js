var searchButton = document.getElementById("searchBtn");
var inputGlobal = document.getElementById("crypto-search").value;

searchButton.addEventListener("click", function () {
  var input = document.getElementById("crypto-search").value;
  console.log(input);
  getCrypto(input);
});

function getCrypto(input) {
  var requestURL2 = `https://api.coincap.io/v2/assets/${input}`;
  fetch(requestURL2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.data.priceUsd);
      // var cost = data.data.priceUsd;
      // let roundedCost = cost.toFixed(2);

      document.getElementById("cryptoID").innerText =
        "Symbol: " + data.data.symbol;

      document.getElementById("price").innerText =
        input + " cost for today: $" + data.data.priceUsd;
    });
}

function getExchangeRate() {
  var requestUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=947025021f02a3444dcee081b8b43f73`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var USD = data.rates.USD;
      let roundedUSD = USD.toFixed(2);
      var CAD = data.rates.CAD;
      let roundedCAD = CAD.toFixed(2);
      var AUD = data.rates.AUD;
      let roundedAUD = AUD.toFixed(2);
      var JPY = data.rates.JPY;
      let roundedJPY = JPY.toFixed(2);

      console.log(data);

      console.log(USD);
      console.log(CAD);

      document.getElementById("exchangeHeader").innerText =
        "Euro exchange rate for today: ";
      document.getElementById("cardUSD").innerText =
        "€1 = " + " $" + roundedUSD + " USD";
      document.getElementById("cardCAD").innerText =
        "€1 = " + " $" + roundedCAD + " CAD";
      document.getElementById("cardAUD").innerText =
        "€1 = " + " $" + roundedAUD + " AUD";
      document.getElementById("cardJPY").innerText =
        "€1 = " + " $" + roundedJPY + " JPY";
    });
}
