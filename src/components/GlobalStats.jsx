import React from "react";
import millify from "millify";
import { useCryptoContext } from "../context/CryptoContext";
import styled from "styled-components";

//totalCryptocurrencies,total Market Cap, total Markets,TotalExchanges,total 24h volume

const GlobalStats = () => {
  const { generalStats } = useCryptoContext();

  //using generalStats to make the cards probably with a flex o grid display

  return (
    <Wrapper>
      <h2 className='title'>Global Crypto Stats</h2>
      <div className='container'>
        <div className='single-stat-container'>
          <h4>Total Cryptocurrencies</h4>
          <h5>{generalStats.total}</h5>
        </div>
        <div className='single-stat-container'>
          <h4>Total Market Cap</h4>
          <h5>{millify(generalStats.totalMarketCap)}</h5>
        </div>
        <div className='single-stat-container'>
          <h4>Total Markets</h4>
          <h5>{millify(generalStats.totalMarkets)}</h5>
        </div>
        <div className='single-stat-container'>
          <h4>Total Exchanges</h4>
          <h5>{millify(generalStats.totalExchanges)}</h5>
        </div>
        <div className='single-stat-container'>
          <h4>Total 24h Volume</h4>
          <h5>{millify(generalStats.total24hVolume)}</h5>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 4rem;
  background: var(--grey-300);
  padding: 1rem;
  .title {
    color: var(--secondary);
  }
  .single-stat-container {
    padding: 0.5rem;
  }
  .container {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* column-gap: 1rem; */
    row-gap: 1rem;
  }
  h5 {
    color: var(--secondary);
  }
  @media screen and (min-width: 992px) {
    margin-top: 0;
  }
`;

export default GlobalStats;
