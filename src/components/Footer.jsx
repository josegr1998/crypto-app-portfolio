import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-container'>
        <h2 style={{ textAlign: "center" }}>CryptoApp</h2>
        <h2>
          <span>&#169;</span> All Rights Reserved
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--grey-900);
  color: white;
  width: 100%;
  height: 10rem;
  display: grid;
  place-items: center;
  h2 {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
export default Footer;
