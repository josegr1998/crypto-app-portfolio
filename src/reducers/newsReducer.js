import {
  UPDATE_COUNT,
  UPDATE_NEWS_CATEGORY,
  NEWS_LOADING,
  GET_NEWS,
} from "../constants/constants";

const reducer = (state, action) => {
  if (action.type === NEWS_LOADING) {
    return { ...state, isNewsLoading: true };
  }
  if (action.type === GET_NEWS) {
    return { ...state, isNewsLoading: false, news: action.payload };
  }
  if (action.type === UPDATE_COUNT) {
    return { ...state, count: action.payload };
  }
  if (action.type === UPDATE_NEWS_CATEGORY) {
    return { ...state, newsCategory: action.payload };
  }
};

export default reducer;
