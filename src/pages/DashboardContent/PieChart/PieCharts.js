import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';


Chart.register(ArcElement);

const DonutChartContainer = styled.div`
  position: relative;
  height: 19rem;
  width: 20rem;
  padding: 35px;
  border: 1px solid rgba(145, 150, 150, 0.889);
  border-radius: 10px;
  margin-left: 20px;

  

  @media screen and (max-width: 768px) {
    width: 100%; /* Make it full width on smaller screens */
    margin-left: 0; /* Remove left margin on smaller screens */
  }
`;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-65%, -50%);

  p {
    font-size: medium;

    color: #333;

  }

  @media screen and (max-width: 768px) {
    transform: translate(-80%, -50%); /* Adjust translation on smaller screens */
  }
`;



const PieCharts = () => {
  const data = {
    labels: ['Pink', 'Purple', 'Grey'],
    datasets: [
      {
        data: [20, 50, 40],
        backgroundColor: ['#FF00FF', '#7700B3', 'rgba(145, 150, 150, 0.889)'],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    cutoutPercentage: 70,
    legend: {
      display: false,
    },
  };
  

  return (
    <DonutChartContainer>
      <div>Customers</div>
      <Doughnut data={data} options={options} />
      <CenterText>
        <p>60%Total</p>
        <p>Customers</p>
      </CenterText>
    </DonutChartContainer>
  );
}

export default PieCharts;
