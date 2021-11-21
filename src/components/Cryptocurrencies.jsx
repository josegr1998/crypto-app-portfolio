import React from "react";
import { useCryptoContext } from "../context/CryptoContext";
import millify from "millify";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "antd";
import Loading from "./Loading";

const Cryptocurrencies = ({ simplified }) => {
  let {
    AllCryptoCurrencies,
    isLoading,
    filteredCryptocurrencies,
    filterCoins,
    updateCurrentId,
    searchValue,
  } = useCryptoContext();

  if (simplified) {
    AllCryptoCurrencies = AllCryptoCurrencies.slice(0, 10);
  } else {
    AllCryptoCurrencies = filteredCryptocurrencies;
  }

  if (isLoading) {
    return (
      <Wrapper>
        <div className='loading-div'>
          <div className='loader-container'>
            <Loading />
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {simplified ? (
        <div className='article-header'>
          <h2 className='title'>Top 10 Cryptocurrencies in the world</h2>

          <Link to='/cryptocurrencies' className='header-link'>
            Show All
          </Link>
        </div>
      ) : (
        <div className='input-container'>
          <Input
            placeholder='Search Cryptocurrency'
            className='input'
            onChange={(e) => filterCoins(e.target.value)}
            value={searchValue}
          />
          {AllCryptoCurrencies.length < 1 && (
            <h2
              style={{ height: "4rem", textAlign: "center", marginTop: "4rem" }}
            >
              Sorry, no Cryptocurrency found
            </h2>
          )}
        </div>
      )}

      <div className='cryptos-container'>
        {AllCryptoCurrencies.map((crypto) => {
          return (
            <div className='single-crypto-container' key={crypto.name}>
              <div className='header'>
                <h4>
                  {crypto.rank} {crypto.name}
                </h4>
                <img src={crypto.iconUrl} alt='' />
              </div>
              <div className='crypto-body'>
                <p>Price : $ {millify(crypto?.price)}</p>
                <p>Market Cap : $ {millify(crypto?.marketCap)}</p>
                <p>
                  Change :{" "}
                  <span className={crypto.change > 0 ? "green" : "red"}>
                    {millify(crypto?.change)}%
                  </span>
                </p>
              </div>
              <Link
                to={`/singleCrypto/${crypto.id}`}
                onClick={() => updateCurrentId(crypto.id)}
                className='crypto-btn'
              >
                view more
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 4rem;
  padding: 1rem;
  .title {
    color: var(--secondary);
  }
  .header {
    display: flex;
    justify-content: space-between;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
  .single-crypto-container {
    margin-top: 1rem;
    padding: 0.5rem;
    box-shadow: 4px 3px 11px 0px var(--secondary);
    transition: var(--transition);
  }
  .single-crypto-container:hover {
    transform: scale(1.02);
  }
  .crypto-body {
    p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  }
  .crypto-btn {
    font-size: 1.2rem;
    width: 7rem;
    margin-top: 0.5rem;
    display: block;
    margin: 0 auto;
    color: var(--grey-900);
    cursor: pointer;
    transition: var(--transition);
  }
  .crypto-btn:hover {
    color: var(--secondary);
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
  .input {
    width: 60vw;
    display: block;
    margin: 0 auto;
    height: 2.5rem;
    font-size: 1.2rem;
    padding: 0.25rem;
    outline: none;
    border: transparent 1px solid;
    border-bottom: 1px solid var(--secondary);
  }

  @media screen and (min-width: 768px) {
    .cryptos-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  @media screen and (min-width: 992px) {
    .cryptos-container {
      grid-template-columns: repeat(3, 1fr);
    }
    margin-top: 0;
  }
`;
export default Cryptocurrencies;
