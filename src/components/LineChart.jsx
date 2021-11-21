import React from "react";
import { useCryptoContext } from "../context/CryptoContext";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import millify from "millify";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const LineChart = () => {
  const {
    cryptoHistory,
    isSingleCryptoLoading,
    singleCrypto: { name, change, price },
  } = useCryptoContext();

  let coinPrice = [];
  let coinTimeStamp = [];

  if (cryptoHistory && !isSingleCryptoLoading) {
    for (let i = 0; i < cryptoHistory.history.length; i++) {
      coinPrice.push(cryptoHistory.history[i].price);
      coinTimeStamp.push(
        new Date(cryptoHistory.history[i].timestamp).toLocaleString()
      );
    }
  }

  console.log(coinPrice);
  console.log(coinTimeStamp);
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#50c9ce",
        borderColor: "#50c9ce",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <Wrapper>
      <h3>{name} Price Chart </h3>
      <h5>
        {change > 0 ? (
          <span className='green'>
            <AiOutlineArrowUp /> {change}
          </span>
        ) : (
          <span className='red'>
            <AiOutlineArrowDown /> {change}
          </span>
        )}
        Current Price {millify(price)}
      </h5>
      <Line data={data} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 2rem;
  margin-bottom: 2rem;
  h3 {
    margin-bottom: 1rem;
  }
  h5 {
    display: grid;
    grid-template-columns: 100px 1fr;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
`;

export default LineChart;
