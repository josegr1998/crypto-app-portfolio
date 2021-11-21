import React from "react";
import { useCryptoContext } from "../context/CryptoContext";
import styled from "styled-components";
import millify from "millify";
import {
  AiOutlineDollar,
  AiOutlineNumber,
  AiOutlineClockCircle,
  AiOutlineTrophy,
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const CryptoDetailsStatistics = () => {
  const { singleCrypto } = useCryptoContext();

  return (
    <Wrapper>
      <div className='first-stat-container'>
        <h2 style={{ color: "var(--secondary)" }}>
          {singleCrypto.name} Value Statistics
        </h2>
        <p>An overview showing the stats of {singleCrypto.name}</p>
        <div className='statistics-container'>
          <div className='single-stat'>
            <span>
              <AiOutlineDollar className='icon' />
            </span>
            Price to USD: ${millify(singleCrypto.price)}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineNumber className='icon' />
            </div>
            Rank: {singleCrypto.rank}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineClockCircle className='icon' />
            </div>
            24h Volume: ${millify(singleCrypto.volume)}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineDollar className='icon' />
            </div>
            Market Cap: ${millify(singleCrypto.marketCap)}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineTrophy className='icon' />
            </div>
            All-time high: ${millify(singleCrypto.allTimeHigh.price)}
          </div>
          <hr />
        </div>
      </div>
      {/**-------------------------------------------------------------------------- */}

      <div className='second-stats-container'>
        <h2 style={{ color: "var(--secondary)" }}>Other statistics</h2>
        <p>Some more stats about {singleCrypto.name}</p>
        <div className='statistics-container'>
          <div className='single-stat'>
            <span>
              <AiOutlineNumber className='icon' />
            </span>
            Number of markets: {millify(singleCrypto.numberOfMarkets)}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineNumber className='icon' />
            </div>
            Number of exchanges: {singleCrypto.numberOfExchanges}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineExclamationCircle className='icon' />
            </div>
            Approved Supply{" "}
            {singleCrypto.approvedSupply ? (
              <AiOutlineCheckCircle style={{ fontSize: "1.5rem" }} />
            ) : (
              <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
            )}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineDollar className='icon' />
            </div>
            Total Supply: ${millify(singleCrypto.totalSupply)}
          </div>
          <hr />
          <div className='single-stat'>
            <div>
              <AiOutlineDollar className='icon' />
            </div>
            Circulating Supply: ${millify(singleCrypto.circulatingSupply)}
          </div>
          <hr />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .statistics-container {
    margin-top: 2rem;
  }
  .icon {
    display: block;
    font-size: 1.5rem;
    color: var(--secondary);
  }
  .single-stat {
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: 50px 1fr 1fr;
    align-items: center;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export default CryptoDetailsStatistics;
