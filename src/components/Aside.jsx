import React from "react";
import styled from "styled-components";
import icon from "../assets/btcp.png";
import { links } from "../constants/links";
import { Link } from "react-router-dom";

const Aside = () => {
  console.log(links);
  return (
    <Wrapper>
      <div className='aside-container'>
        <aside>
          <div className='aside-header'>
            <Link to='/'>
              <img src={icon} alt='' />
            </Link>

            <h1 className='title'>
              Crypto <span>App</span>
            </h1>
          </div>
          <div className='links-container'>
            {links.map((link) => {
              return (
                <div className='single-link-container'>
                  <span>{link.icon}</span>
                  <Link key={link} to={link.src} className='single-link'>
                    {link.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-400);
  min-height: 100vh;
  .aside-container {
    position: sticky;
    top: 1rem;
  }
  .title {
    color: var(--secondary);
  }
  .aside-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-top: 0;
    img {
      width: 5rem;
      height: 5rem;
    }
  }

  .single-link-container {
    display: flex;
    align-items: center;
    color: var(--grey-900);
    margin-top: 2rem;
    margin-left: 1rem;
    transition: var(--transition);
    .single-link {
      display: block;
      font-size: 2rem;
      color: var(--grey-900);
      transition: var(--transition);
    }

    span {
      font-size: 2rem;
      align-self: center;
      color: var(--secondary);
      margin-right: 1rem;
    }
  }
  .single-link-container:hover {
    color: var(--secondary);
    transform: translateY(-10px);
    .single-link {
      color: var(--secondary);
    }
  }
`;
export default Aside;
