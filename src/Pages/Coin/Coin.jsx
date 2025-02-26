
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
        '': ''
      }
    };

    try {
      const response = await fetch(``, options);
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
        '': ''
      }
    };

    try {
      const response = await fetch(
        ``,
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
