import React from "react";
import millify from "millify";
import { useCryptoContext } from "../context/CryptoContext";
import styled from "styled-components";

const GlobalStats = () => {
  const { generalStats } = useCryptoContext();

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
  max-width: 100vw;
  .title {
    color: var(--secondary);
  }
  .single-stat-container {
    padding: 0.5rem;
  }

  h5 {
    color: var(--secondary);
  }
  @media screen and (min-width: 992px) {
    margin-top: 0;
    .container {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1rem;
    }
  }
`;

export default GlobalStats;
