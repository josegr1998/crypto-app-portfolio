import {
  SET_IS_LOADING,
  GET_ALL_COINS_SUCCESS,
  FILTER_COINS,
  UPDATE_TIME_PERIOD,
  SET_IS_SINGLE_CRYPTO_LOADING,
  GET_SINGLE_COIN,
  UPDATE_CURRENT_ID,
} from "../constants/constants";

const reducer = (state, action) => {
  if (action.type === SET_IS_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === SET_IS_SINGLE_CRYPTO_LOADING) {
    return { ...state, isSingleCryptoLoading: true };
  }

  if (action.type === GET_ALL_COINS_SUCCESS) {
    const { coins, stats, exchanges } = action.payload;
    return {
      ...state,
      AllCryptoCurrencies: coins,
      filteredCryptocurrencies: coins,
      generalStats: stats,
      isLoading: false,
      exchanges,
    };
  }
  if (action.type === FILTER_COINS) {
    const newCoins = state.AllCryptoCurrencies.filter((crypto) => {
      if (crypto.name.toLowerCase().includes(action.payload.toLowerCase())) {
        return crypto;
      }
    });

    return { ...state, filteredCryptocurrencies: newCoins };
  }
  if (action.type === GET_SINGLE_COIN) {
    const { coin, coinHistory } = action.payload;
    return {
      ...state,
      singleCrypto: coin,
      cryptoHistory: coinHistory,
      isSingleCryptoLoading: false,
    };
  }
  if (action.type === UPDATE_TIME_PERIOD) {
    return { ...state, timePeriod: action.payload };
  }
  if (action.type === UPDATE_CURRENT_ID) {
    return { ...state, currentId: action.payload };
  }
};

export default reducer;
