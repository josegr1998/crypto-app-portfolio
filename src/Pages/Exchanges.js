import React from "react";
import { useCryptoContext } from "../context/CryptoContext";
import styled from "styled-components";

import SingleExchange from "../components/SingleExchange";
//name, 24h trade volume, markets, change
const Exchanges = () => {
  const { exchanges } = useCryptoContext();

  return (
    <Wrapper>
      <div className='header'>
        <p className='title'>exchanges</p>
        <p className='title'>24h trade volume</p>
        <p className='title'>Markets</p>
        <p className='title'>Market Share</p>
      </div>
      <div className='exchanges'>
        {exchanges.map((exchange) => {
          return <SingleExchange exchange={exchange} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  margin-top: 4rem;
  .title {
    color: var(--secondary);
    padding-bottom: 0.2rem;
    border-bottom: 1px solid var(--secondary);
    text-transform: capitalize;
  }

  .header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  .single-exchange {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 2rem;
  }
  .exchange-change {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .icon {
      font-size: 1.5rem;
    }
    .icon:hover {
      cursor: pointer;
      color: var(--secondary);
      transform: scale(1.1);
    }
  }
  .exchanges {
    margin-top: 2rem;
  }

  .exchange-aditional-info {
    transform: translateX(100%);
    overflow: hidden;
    transition: var(--transition);
    height: 0;
  }
  .exchange-aditional-info.active {
    transform: translateX(0);
    margin-bottom: 2rem;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 1.2rem;
    }
    .single-exchange {
      margin-bottom: 1.5rem;
    }
    .exchange-header {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .exchange-volume,
    .exchange-markets {
      align-self: center;
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 0;
  }
`;
export default Exchanges;
