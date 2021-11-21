import React, { useState, useRef, useEffect } from "react";
import { links } from "../contants/links";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import icon from "../assets/btcp.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainer = useRef(null);

  useEffect(() => {
    if (showLinks) {
      linksContainer.current.style.transform = "translateX(0)";
    } else {
      linksContainer.current.style.transform = "translateX(-150%)";
    }
  }, [showLinks]);

  return (
    <Wrapper>
      <div className='container'>
        <img src={icon} alt='' />
        <h2>Crypto App</h2>
        <FaBars
          className='nav-toggle'
          onClick={() => setShowLinks(!showLinks)}
        />
      </div>
      <div className='links-container' ref={linksContainer}>
        {links.map((link) => {
          return (
            <div className='single-link-container'>
              <span>{link.icon}</span>
              <Link
                key={link}
                to={link.src}
                className='single-link'
                ref={link}
                onClick={() => {
                  linksContainer.current.style.transform = "translateX(-150%)";
                }}
              >
                {link.title}
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 4rem;
  background: var(--primary-500);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;

  .container {
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
  .nav-toggle {
    color: white;
    font-size: 1.7rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .nav-toggle:hover {
    transform: scale(1.1);
    color: var(--secondary);
  }
  .links-container {
    background: var(--primary-500);
    padding-top: 1rem;
    padding-bottom: 2rem;
    overflow: hidden;
    transform: translateX(-150%);
    transition: var(--transition);
    z-index: 5;
  }
  .single-link-container {
    font-size: 1.5rem;
    margin: 0 auto;
    display: block;
    padding-left: 2rem;
    margin-top: 1rem;
    color: var(--grey-900);
    display: flex;
    gap: 1rem;
    transition: var(--transition);
    .single-link {
      color: var(--grey-900);
      transition: var(--transition);
    }
  }
  .single-link-container:hover {
    color: var(--secondary);
    transform: translateY(-5px);
    .single-link {
      color: var(--secondary);
    }
  }
`;

export default Navbar;
