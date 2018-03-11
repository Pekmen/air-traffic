import React from 'react';

const Home = (props) => {
  return (
    (props.airTraffic.acList)
    ? (
      <ul>
        {props.airTraffic.acList.map(airplane => {
          let company = airplane.Op;
          if (company) company = airplane.Op.replace(/ /g, '');
          return <li key={airplane.Id}>{airplane.Call} - {airplane.Alt} - <img src={`https://logo.clearbit.com/${company}.com`} /></li>
        })}
      </ul>
    )
    : <p>no data</p>
  );
};

export default Home;
