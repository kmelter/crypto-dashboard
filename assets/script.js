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
      var CAD = data.rates.CAD;
      var AUD = data.rates.AUD;
      var JPY = data.rates.JPY;

      console.log(data);

      console.log(USD);
      console.log(CAD);

      document.getElementById("exchangeHeader").innerText =
        "Euro exchange rate for today: ";
      document.getElementById("cardUSD").innerText =
        "€1 = " + " $" + USD + "USD";
      document.getElementById("cardCAD").innerText =
        "€1 = " + " $" + CAD + "CAD";
      document.getElementById("cardAUD").innerText =
        "€1 = " + " $" + AUD + "AUD";
      document.getElementById("cardJPY").innerText =
        "€1 = " + " $" + JPY + "JPY";
    });
}
