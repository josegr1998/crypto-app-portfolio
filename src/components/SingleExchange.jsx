import React, { useState } from "react";
import millify from "millify";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import HTMLReactParser from "html-react-parser";

const SingleExchange = ({ exchange }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <>
      <div className='single-exchange' key={exchange.id}>
        <div className='exchange-header'>
          <p>{exchange.rank}</p>
          <img src={exchange.iconUrl} alt='' />
          <p>{exchange.name}</p>
        </div>
        <div className='exchange-volume'>
          <p>{millify(exchange.volume)}</p>
        </div>
        <div className='exchange-markets'>
          <p>{exchange.numberOfMarkets}</p>
        </div>
        <div className='exchange-change'>
          <p>{millify(exchange.marketShare)} %</p>
          <div className='icon-container'>
            {isShowMore ? (
              <AiOutlineMinusSquare
                className='icon'
                onClick={() => setIsShowMore(!isShowMore)}
              />
            ) : (
              <AiOutlinePlusSquare
                className='icon'
                onClick={() => setIsShowMore(!isShowMore)}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`exchange-aditional-info ${isShowMore && `active`}`}
        dangerouslySetInnerHTML={{ __html: exchange.description }}
      ></div>
    </>
  );
};

export default SingleExchange;
