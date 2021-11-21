import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/newsReducer";
import axios from "axios";
import {
  UPDATE_COUNT,
  UPDATE_NEWS_CATEGORY,
  NEWS_LOADING,
  GET_NEWS,
} from "../constants/constants";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
//by category and count `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
// "x-rapidapi-host": process.env.REACT_APP_xrapidapihost1,
//"x-rapidapi-key": process.env.REACT_APP_xrapidapikey1,

const NewsContext = React.createContext();

const initialState = {
  news: [],
  newsCategory: "cryptocurrency",
  isNewsLoading: true,
  count: 6,
};

const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateCountValue = (value) => {
    dispatch({ type: UPDATE_COUNT, payload: value });
  };

  const updateNewsCategory = (value) => {
    dispatch({ type: UPDATE_NEWS_CATEGORY, payload: value });
  };

  const fetchNews = async () => {
    try {
      dispatch({ type: NEWS_LOADING });
      const response = await axios.get(
        `${baseUrl}/news/search?q=${state.newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${state.count}`,
        {
          headers: {
            "x-rapidapi-host": process.env.REACT_APP_xrapidapihost_news,
            "x-rapidapi-key": process.env.REACT_APP_xrapidapikey_news,
          },
        }
      );
      dispatch({ type: GET_NEWS, payload: response.data.value });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [state.count, state.newsCategory]);
  //have to be really carefull because if there is a dispatch that updates the value of count EVEN if the value doenst change, the useEffect gets triggered anyways and it causes an infinite loop. Learned that the hard way :)

  return (
    <NewsContext.Provider
      value={{ ...state, updateCountValue, fetchNews, updateNewsCategory }}
    >
      {children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsProvider, useNewsContext };
