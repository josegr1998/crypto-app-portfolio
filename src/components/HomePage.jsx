import React from "react";
import styled from "styled-components";
import Cryptocurrencies from "./Cryptocurrencies";
import GlobalStats from "./GlobalStats";
import News from "./News";
import { useCryptoContext } from "../context/CryptoContext";
import Loading from "./Loading";

const HomePage = () => {
  const { isLoading } = useCryptoContext();
  if (isLoading) {
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
      <GlobalStats />
      <Cryptocurrencies simplified />
      <News simplified />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;
