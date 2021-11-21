import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useCryptoContext } from "../context/CryptoContext";
import styled from "styled-components";
import CryptoDetailsStatistics from "./CryptoDetailsStatistics";
import CryptoDetailsLinks from "./CryptoDetailsLinks";
import LineChart from "./LineChart";
import Loading from "./Loading";

const CryptoDetails = () => {
  const { id } = useParams();
  const { isSingleCryptoLoading, singleCrypto, timePeriod, updateTimestamp } =
    useCryptoContext();

  const timelapse = ["24h", "7d", "30d", "1y", "5y"];

  if (isSingleCryptoLoading) {
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
      <div className='header'>
        <h1>
          {singleCrypto.name} {singleCrypto.slug} Price
        </h1>
        <p>
          {singleCrypto.name} price is US dollars. View value statistics, market
          cap and supply
        </p>
      </div>
      <hr />
      <div className='select'>
        <select
          value={timePeriod}
          placeholder='Select Time Period'
          className='time-select'
          onChange={(e) => updateTimestamp(e.target.value, singleCrypto.id)}
        >
          {timelapse.map((date) => {
            return <option value={date}>{date}</option>;
          })}
        </select>
      </div>
      <div className='chart-container'>
        <LineChart />
      </div>

      <CryptoDetailsStatistics />

      <CryptoDetailsLinks />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  padding: 1rem;
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .time-select {
    width: 7rem;
    font-size: 1.2rem;
    padding: 0.25rem;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    offset: none;
  }
  .time-select:focus {
    border: 1px solid var(--secondary);
  }
  @media screen and (min-width: 992px) {
    margin-top: 0;
    p {
      font-size: 1.2rem;
    }
  }
`;

export default CryptoDetails;
