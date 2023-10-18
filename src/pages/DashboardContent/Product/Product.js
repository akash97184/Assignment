import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  border: 1px solid #ccc;
  display: flex;
  width: 95%;
  height: 5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 4px;

  .container1 {
    display: flex;
    padding: 10px;
    align-items: center;

      .title-container {
      display: flex;
      flex-direction: column;

        h3 {
          font-size: 1.2rem;
          font-weight: 500;
        }

        p {
          font-size: 0.8rem;
          color: rgba(145, 150, 150, 0.889);
        }
      }
  }

  .imageContainer {
    width: 65px;
    height: 65px;
    overflow: hidden;
    object-fit: contain;
    margin-right: 10px;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }


  .container2 {
    display:flex;
    align-items:center;
    width: 35%;
    justify-content: space-between;
    height: 5rem;

    .stock-text {
      font-size: small;
      color: grey;
      padding: 0 30px;

      
    }

    .text3 {
      font-weight: 150;
      font-size: small;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    height: 7rem;
    width: 100%;

    .container1 {
      flex-direction: column;
      margin-top: 0.2rem;
      

      .imageContainer {
        margin-bottom: 10px;
        order: 2;
      }
      .title-container {
        margin-top: 0.3rem;
        order: 1;
        .item-title {
          font-size: 0.9rem;
        }
      }
    }

    .container2 {
      width: 60%;
      justify-content: space-between;
      align-items: center;

      .stock-text {
        padding: 0 10px;
      }
    }
  }


`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Product = ({ item }) => {
  return (
    <ProductWrapper>
      <div className='container1'>
        <div className='imageContainer'>
          <ProductImage src={item.image} alt={item.title} />
        </div>
        <div className='title-container'>
          <h3 className='item-title'>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </div>

      <div className='container2'>
        <p className='stock-text'>{item.stock}</p>
        <p className='text3'>{item.price}</p>
        <p className='stock-text'>{item.totalSales}</p>
      </div>
    </ProductWrapper>
  );
};

export default Product;
