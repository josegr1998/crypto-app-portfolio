import React from "react";
import { useCryptoContext } from "../context/CryptoContext";
import styled from "styled-components";

const CryptoDetailsLinks = () => {
  const { singleCrypto } = useCryptoContext();
  return (
    <Wrapper>
      <div className='desc-container'>
        <h2 className='title'>What is {singleCrypto.name}?</h2>
        <div
          className='crypto-description'
          dangerouslySetInnerHTML={{ __html: singleCrypto.description }}
        ></div>
      </div>
      <div className='links-container'>
        <h2 className='title links-title'>{singleCrypto.name} Links</h2>
        {singleCrypto.links.map((link) => {
          return (
            <>
              <div>
                <h4>
                  <span>{link.type}</span>

                  <a href={link.url} target='_blank'>
                    {link.name}
                  </a>
                </h4>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .desc-container {
    margin-top: 2rem;
  }
  .title {
    color: var(--secondary);
    font-size: 2.3rem;
  }
  .crypto-description {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--secondary);
  }
  p {
    font-size: 1rem;
  }
  .links-container {
    margin-top: 2rem;
  }
  h4 {
    display: grid;
    grid-template-columns: 200px 1fr;

    a {
      font-size: 1.2rem;
    }
  }
  .links-title {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    .links-title {
      font-size: 2.3rem;
    }
  }
`;
export default CryptoDetailsLinks;
