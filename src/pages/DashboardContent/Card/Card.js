import React from 'react';
import styled from 'styled-components';
import './Card.css';

const CardContainer = styled.div`
  display: flex;
  height: 9rem;
  width: 18rem;
  gap: 10px;
  border: 1px solid rgba(145, 150, 150, 0.889);
  padding: 15px 10px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 15rem; /* Adjust width for small screens */
    height: auto;
    align-items: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 20rem; /* Adjust width for medium screens */
  }
`;


const Card = ({ item }) => {
  return (
    <>
        <CardContainer>
              <div className='icon1'>
                {item.icon1}
              </div>
              <div className='container'>
                <div className='title'>{item.title}</div>
                <div className='price'>{item.price}</div>
                <div className='icon2'>
                  {item.icon2}
                  <span>{item.rate}</span>
                  <p className='text'>{item.text}</p>
                </div>
              </div>
        </CardContainer>
    </>
  );
};

export default Card;
