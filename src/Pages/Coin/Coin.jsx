// import React, { useContext, useEffect, useState } from 'react';
// import './Coin.css';
// import { useParams } from 'react-router-dom';
// import { CoinContext } from '../../Context/CoinContext';
// import Chart from 'react-google-charts';
// import LineChart from '../../Components/LineChart/LineChart';
// import { ModuleGraph } from 'vite';

// const Coin = () => {
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState(null);
//   const [historicalData, setHistoricalData] = useState();
//   const { currency } = useContext(CoinContext);


//   const fetchCoinData = async () => {
//     const options = {
//       method: 'GET',
//       headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-4cM2aEftnoH9DZughfBy5LHe'}
//     };
    
//     fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
//       .then(response => response.json())
//       .then(response => setCoinData(response))
//       .catch(err => console.error(err));
//   }


//   const fetchHistoricalData = async () =>{
//     const options = {
//       method: 'GET',
//       headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-4cM2aEftnoH9DZughfBy5LHe'}
//     };
    
//     fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
//       .then(response => response.json())
//       .then(response => setHistoricalData(response))
//       .catch(err => console.error(err));
//   }

//   useEffect(() => {
//     fetchCoinData();
//     fetchHistoricalData();
//   }, [currency]);

 

//   if (coinData,historicalData) {
  
//   return (
//     <div className='coin'>
     
//         <div className='coinName'>
//         <img src={coinData.image.large} alt=""/>
//         <p><b> {coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
//         </div>

      

//         <div className='coinChart'>
//         <LineChart historicalData = {historicalData}/>
//         </div>

//         <div className='coinInfo'>
//         <ul  className='list1'>
//             <li>Crypto Market Rank</li>
//             <li>{coinData.market_cap_rank}</li>
//           </ul>
//           <ul className='list1'>
//             <li>Current Price</li>
//             <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
//           </ul>

//           <ul className='list1'>
//             <li>Market Cap</li>
//             <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
//           </ul>

//           <ul className='list1'>
//             <li>24 Hour High</li>
//             <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
//           </ul>

//           <ul className='list1'>
//             <li>24 Hour Low</li>
//             <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
//           </ul>



//          </div>
//       </div>
     
//   );

// }
//   return (
    
   
      
//     <div className="waiting" >
        
      
//     </div>
   
      
    
      
   
//   );

  
// };

// export default Coin;










import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../Context/CoinContext';
import LineChart from '../../Components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-4cM2aEftnoH9DZughfBy5LHe'
      }
    };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-4cM2aEftnoH9DZughfBy5LHe'
      }
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCoinData();
    fetchHistoricalData();
    setLoading(false);
  }, [coinId, currency]);

  if (loading) {
    return <div className="waiting">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coinName">
          <img src={coinData.image?.large} alt="" />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>

        <div className="coinChart">
          <LineChart historicalData={historicalData} />
        </div>

        <div className="coinInfo">
          <ul className="list1">
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul className="list1">
            <li>Current Price</li>
            <li>
              {currency.symbol}
              {coinData.market_data?.current_price[currency.name]?.toLocaleString()}
            </li>
          </ul>

          <ul className="list1">
            <li>Market Cap</li>
            <li>
              {currency.symbol}
              {coinData.market_data?.market_cap[currency.name]?.toLocaleString()}
            </li>
          </ul>

          <ul className="list1">
            <li>24 Hour High</li>
            <li>
              {currency.symbol}
              {coinData.market_data?.high_24h[currency.name]?.toLocaleString()}
            </li>
          </ul>

          <ul className="list1">
            <li>24 Hour Low</li>
            <li>
              {currency.symbol}
              {coinData.market_data?.low_24h[currency.name]?.toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return <div className="waiting"></div>;
};

export default Coin;
