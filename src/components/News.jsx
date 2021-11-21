import React, { useEffect, useRef } from "react";
import { useNewsContext } from "../context/NewsContext";
import styled from "styled-components";
import moment from "moment";
import { Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const News = ({ simplified }) => {
  const {
    updateCountValue,
    fetchNews,
    isNewsLoading,
    count,
    news,
    updateNewsCategory,
  } = useNewsContext();
  const searchInput = useRef(null);

  if (count !== 6 && simplified) {
    updateCountValue(6);
    updateNewsCategory("cryptocurrency");
  }
  if (!simplified && count !== 12) {
    updateCountValue(12);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    updateNewsCategory(searchInput.current.state.value);
  };

  if (isNewsLoading) {
    return (
      <div className='loading-div'>
        <div className='loader-container'>
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <Wrapper>
      {!simplified ? (
        <form className='input-container' onSubmit={handleSubmit}>
          <Input
            placeholder='Search Crypto News'
            className='input'
            ref={searchInput}
          />
          <button className='search-btn' type='submit'>
            <AiOutlineSearch />
          </button>
        </form>
      ) : (
        <div className='article-header'>
          <h2 className='section-title'>Latest Crypto News</h2>
          <Link to='/news' className='header-link'>
            Show All
          </Link>
        </div>
      )}
      <div className='news-container'>
        {news.map((item) => {
          return (
            <a className='single-new-container' href={item.url} target='_blank'>
              <div className='new-header'>
                <h5>
                  {item.name.length > 80
                    ? `${item.name.substring(0, 80)}...`
                    : `${item.name}`}
                </h5>
                <img
                  src={
                    item?.image?.thumbnail?.contentUrl ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                  }
                  alt='new-img'
                  className='new-img'
                />
                <p>
                  {item.description.length > 100
                    ? `${item.description.substring(0, 200)}...`
                    : `${item.description}`}
                </p>
              </div>
              <div className='news-footer'>
                <img
                  src={
                    item.provider[0]?.image?.thumbnail?.contentUrl ||
                    '"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"'
                  }
                  className='new-provider'
                  alt=''
                />
                <p>{item.provider[0]?.name}</p>
                <p>{moment(item.datePublished).startOf("ss").fromNow()}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  background: var(--grey-300);
  margin-top: 4rem;

  .section-title {
    color: var(--secondary);
  }
  .single-new-container {
    color: var(--grey-900);
    padding: 1rem;
    display: block;
    box-shadow: var(--shadow-2);
    margin-bottom: 1rem;
    transition: var(--transition);
    background: white;
    h4 {
      font-weight: 700;
    }
    .new-img {
      width: 70%;
      height: 15rem;
      object-fit: cover;
      display: block;
      margin: 1rem auto;
      border-radius: 1rem;
      max-width: 20rem;
    }
  }
  .single-new-container:hover {
    box-shadow: var(--shadow-4);
    transform: scale(1.02);
    h4 {
      color: var(--secondary);
    }
  }
  .news-footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .new-provider {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40rem;
    margin: 0 auto;
    .search-btn {
      font-size: 1.7rem;
      width: 15rem;
      border: transparent;
      text-align: left;
      padding-left: 2rem;
      background: transparent;
      align-self: flex-start;
      cursor: pointer;
      transition: var(--transition);
    }
    .search-btn:hover {
      color: var(--secondary);
      transform: scale(1.02);
    }
  }
  .input {
    width: 20rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    background: var(--grey-300);
    height: 2.5rem;
    font-size: 1.2rem;
    padding: 0.25rem;
    outline: none;
    border: transparent 1px solid;
    border-bottom: 1px solid var(--secondary);
  }
  .article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    .header-link {
      font-size: 1.7rem;
      color: var(--grey-900);
      transition: var(--transition);
    }

    .header-link:hover {
      color: var(--secondary);
    }
  }
  @media screen and (min-width: 768px) {
    .news-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
  @media screen and (min-width: 992px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1570px) {
    .news-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default News;
