import React from 'react';
import './Price.css';

const Price = () => {
  return (
    <div className="price-container">
      <h1 className="price-header">Factors Influencing the Price of Bitcoin</h1>
      <div className="price-content">
        <div className="factor">
          <h2>1. Supply and Demand</h2>
          <p>
            <strong>Supply:</strong> Bitcoin has a fixed maximum supply of 21 million coins. This limited supply creates scarcity, which can drive up the price as demand increases.
          </p>
          <p>
            <strong>Demand:</strong> Demand for Bitcoin can be influenced by various factors including investor interest, media coverage, economic conditions, and its acceptance as a payment method.
          </p>
        </div>

        <div className="factor">
          <h2>2. Market Sentiment</h2>
          <p>
            Investor perception and sentiment can heavily impact Bitcoin's price. Positive news, such as institutional adoption or regulatory approval, can drive demand, while negative news, such as security breaches or regulatory crackdowns, can decrease demand.
          </p>
        </div>

        <div className="factor">
          <h2>3. Regulation</h2>
          <p>
            Regulatory developments around the world can significantly impact Bitcoin's price. Favorable regulations can boost investor confidence and increase demand, while unfavorable regulations can lead to decreased demand.
          </p>
        </div>

        <div className="factor">
          <h2>4. Technological Developments</h2>
          <p>
            Advances in Bitcoin's underlying technology, such as improvements in security or scalability, can enhance its utility and appeal, driving up demand and price. Conversely, technological issues or failures can negatively impact its price.
          </p>
        </div>

        <div className="factor">
          <h2>5. Market Competition</h2>
          <p>
            The presence and performance of other cryptocurrencies can influence Bitcoin's price. For example, if a new cryptocurrency is perceived to offer better features, some investors might move their funds from Bitcoin to the new cryptocurrency.
          </p>
        </div>

        <div className="factor">
          <h2>6. Macroeconomic Factors</h2>
          <p>
            Broader economic conditions, such as inflation, currency devaluation, and global economic stability, can affect Bitcoin's price. Bitcoin is often seen as a hedge against inflation and economic instability, which can increase its demand during such times.
          </p>
        </div>

        <div className="factor">
          <h2>7. Media Influence</h2>
          <p>
            Media coverage and public perception play a significant role in shaping market sentiment. Positive media coverage can increase demand and drive up the price, while negative coverage can have the opposite effect.
          </p>
        </div>

        <div className="factor">
          <h2>8. Liquidity</h2>
          <p>
            The ease with which Bitcoin can be bought and sold (its liquidity) affects its price. High liquidity generally leads to more stable prices, while low liquidity can lead to higher volatility.
          </p>
        </div>

        <div className="factor">
          <h2>9. Market Manipulation</h2>
          <p>
            Activities such as pump-and-dump schemes, where the price is artificially inflated and then sold off, can temporarily affect the price of Bitcoin.
          </p>
        </div>

        <div className="factor">
          <h2>10. Economic Events</h2>
          <p>
            Major economic events or crises can lead to increased interest in Bitcoin as a store of value, impacting its price.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Price;
