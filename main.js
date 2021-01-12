const API_URL = 'https://blockchain.info/tobtc?currency=USD&'
const url_bitcoin = 'https://blockchain.info/ticker'
const monto = 'value=:id'
const opts = { crossDomain: true }
var valor


function Obtener_precio_bitcoin() {

    return new Promise(function(resolve, reject) {
        $
            .get(url_bitcoin, opts, function(data) {
                resolve(data)
            })
            .fail(function() {
                reject()
            })
    })
}




function btc() {
    Obtener_precio_bitcoin()
        .then(function(data) {
            document.getElementById('resultado').innerHTML = `1 BTC equivale a ${data.USD.buy} USD`
        })
        .catch(function() {
            console.log(`sucedio un error al obteer el valor del BTC`)
        })
}


// AL INSERTAR UN VALOR 

function Obtener_precio(valor) {

    return new Promise(function(resolve, reject) {
        var url = `${API_URL}${monto.replace(':id', valor)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(function() {
                reject(valor)
            })
    })
}




function usd_btc() {
    valor = document.getElementById("valor").value;
    Obtener_precio(valor)
        .then(function(data) {
            document.getElementById('resultado').innerHTML = `${valor} USD equivalentes a ${data} BTC`
        })
        .catch(function(valor) {
            console.log(`sucedio un error al obteer el valor del BTC para el monto ${valor} USD`)
        })
}