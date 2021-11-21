import React, { useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/cryptoReducer";
import axios from "axios";
import {
  SET_IS_LOADING,
  GET_ALL_COINS_SUCCESS,
  FILTER_COINS,
  UPDATE_TIME_PERIOD,
  SET_IS_SINGLE_CRYPTO_LOADING,
  GET_SINGLE_COIN,
  UPDATE_CURRENT_ID,
} from "../constants/constants";

const CryptoContext = React.createContext();

const baseUrl = "https://coinranking1.p.rapidapi.com";

const initialState = {
  AllCryptoCurrencies: [],
  generalStats: {},
  filteredCryptocurrencies: [],
  isLoading: true,
  exchanges: [],
  singleCrypto: {},
  isSingleCryptoLoading: true,
  cryptoHistory: [],
  timePeriod: "7d",
  currentId: 1,
  searchValue: "",
};

const CryptoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(process.env.REACT_APP_xrapidapikey_news);

  const fetchData = async () => {
    dispatch({ type: SET_IS_LOADING });
    try {
      const response = await axios.get(`${baseUrl}/coins?limit=100`, {
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_xrapidapihost_coins,
          "x-rapidapi-key": process.env.REACT_APP_xrapidapikey_news,
        },
      });
      const coins = response.data.data.coins;
      const stats = response.data.data.stats;

      const exchangesResponse = await axios.get(`${baseUrl}/exchanges`, {
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_xrapidapihost_coins,
          "x-rapidapi-key": process.env.REACT_APP_xrapidapikey_news,
        },
      });
      const exchanges = exchangesResponse.data.data.exchanges;

      dispatch({
        type: GET_ALL_COINS_SUCCESS,
        payload: { coins, stats, exchanges },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const filterCoins = (value) => {
    dispatch({ type: FILTER_COINS, payload: value });
  };

  const updateTimestamp = (value) => {
    dispatch({ type: UPDATE_TIME_PERIOD, payload: value });
  };

  const fetchSingleCrypto = async (id, type) => {
    if (!type) {
      dispatch({ type: SET_IS_SINGLE_CRYPTO_LOADING });
    }

    try {
      const response = await axios.get(`${baseUrl}/coin/${id}`, {
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_xrapidapihost_coins,
          "x-rapidapi-key": process.env.REACT_APP_xrapidapikey_news,
        },
      });
      const coinHistoryResponse = await axios.get(
        `${baseUrl}/coin/${id}/history/${state.timePeriod}`,
        {
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_xrapidapihost_coins,
            "x-rapidapi-key": process.env.REACT_APP_xrapidapikey_news,
          },
        }
      );

      const coin = response.data.data.coin;
      const coinHistory = coinHistoryResponse.data.data;

      dispatch({ type: GET_SINGLE_COIN, payload: { coin, coinHistory } });
    } catch (error) {
      console.log(error);
    }
  };
  const updateCurrentId = (id) => {
    dispatch({ type: UPDATE_CURRENT_ID, payload: id });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchSingleCrypto(state.currentId, true);
  }, [state.timePeriod]);
  useEffect(() => {
    fetchSingleCrypto(state.currentId, false);
  }, [state.currentId]);
  return (
    <CryptoContext.Provider
      value={{
        ...state,
        filterCoins,
        fetchSingleCrypto,
        updateTimestamp,
        updateCurrentId,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

const useCryptoContext = () => {
  return useContext(CryptoContext);
};

export { CryptoProvider, useCryptoContext };
