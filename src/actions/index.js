import axios from 'axios';

export function loadCoin(){
  return (dispatch) => {
    axios.get("https://api.coinmarketcap.com/v1/ticker/")
    .then((response) => {
      dispatch(getData(response.data.filter((currency) => ["bitcoin", "ethereum"].includes(currency.id))))
    })
  }
}

export function getData(data){
  return {
    type: 'FETCH_DATA',
    data
  }
}
