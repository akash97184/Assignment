import React from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { MdWavingHand } from 'react-icons/md';
import YearChart from './DashboardContent/BarChart/YearChart';
import PieChart from './DashboardContent/PieChart/PieCharts';
import { CardData } from './DashboardContent/Card/CardData';
import Card from './DashboardContent/Card/Card';
import Product  from './DashboardContent/Product/Product';
import productData from './DashboardContent/Product/ProductData';

const Main = styled.div`
  height: 100vh;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 100px;

  div{
    font-size: 1rem;

    span {
      color: #FFCC99;
    }
  }

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 100px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin: 0 20px;
  }
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 100px;
  padding: 20px;
  gap: 0.5rem;


  .stats {
    background: white;
    padding: 25px;
    border-radius: 5px;
    height: 19rem;
    width: 53rem;
    padding-bottom: 50px;
    border: 1px solid grey;
  }

  .tooltip__style {

      color: rgba(145, 150, 150, 0.889);
  }

  .stats__title {
      color: rgba(145, 150, 150, 0.889);
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    /* Apply these styles for screens up to 768px width */
    grid-template-columns: 1fr; /* Change to a single column layout for smaller screens */
    margin: 0 10px; /* Adjusted margin for even smaller screens */
    gap: 3rem;
    .stats {
      padding: 9px; /* Further adjusted padding for smaller screens */
      width: 21rem;
      height: 10rem;
    }
  }
`;

const CustomerDetails = styled.div`
  margin: 0 120px;
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
  padding-top: 2rem;
  padding-bottom: 1.2rem;
  border: 1px solid  rgba(145, 150, 150, 0.889);
  border-radius: 10px;

  .headContainer {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  .subContainer {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px 0;
    padding: 10px;
    border-bottom: 1px solid rgba(145, 150, 150, 0.889);

    .text2 {
      font-size: small;
      color: rgba(145, 150, 150, 0.889);
    }

    .stockContainer {
      display:flex;
      align-items:center;
      width: 30%;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 20px;
    padding: 0 1rem;

    .headContainer {
      width: 100%;
      margin-top: 2rem;

      h3 {
        font-size: 1.2rem;
      }
    }

    .subContainer {
      width: 100%;
      justify-content: space-between;
      align-items: baseline;

      .stockContainer {
        width: 50%;
        margin-top: 10px;
        justify-content: space-between;
      }
    }
  }
`;


const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
`;





const Dashboard = () => {
  return (
    <>
      <Main>
        <Header>
          <div>Hi User
            <span><MdWavingHand /></span>,
          </div>
          <SearchBar />
        </Header>
        <Cards>
          {
              CardData.map((item, index) => {
              return <Card key={index} item={item} />;
              })
          }
        </Cards>
        <Charts>
          <div className="stats">
            <h3 className="stats__title">Monthly Earning</h3>
            <YearChart></YearChart>
          </div>
          
          <PieChart></PieChart>
        </Charts>
        <CustomerDetails>
          <div className='headContainer'>
            <h3>Product Sell</h3>
            <div>
              <SearchBar />
            </div>            
          </div>


          <div className='subContainer'>
            <div className='productName'>
              <p className='text2'>Product Name</p>
            </div>
            <div className='stockContainer'>
              <p className='text2'>Stock</p>
              <p className='text2'>Price</p>
              <p className='text2'>Total Sales</p>
            </div>
          </div>
          <Products>
          {
              productData.map((item, index) => {
              return <Product key={index} item={item} />;
              })
          }
          </Products>
        </CustomerDetails>
      </Main>     
    </>
  )
}

export default Dashboard;