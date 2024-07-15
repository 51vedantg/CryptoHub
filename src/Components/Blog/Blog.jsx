import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: 'Understanding Bitcoin',
      date: 'June 20, 2024',
      content: `Bitcoin is the first and most well-known cryptocurrency. Created by an anonymous person or group of people under the pseudonym Satoshi Nakamoto, it was introduced in a 2008 white paper titled "Bitcoin: A Peer-to-Peer Electronic Cash System." Bitcoin operates on a decentralized ledger called blockchain and is not controlled by any central authority, making it a decentralized digital currency.`,
      link: 'https://en.wikipedia.org/wiki/Bitcoin'
    },
    {
      title: 'The Rise of Ethereum',
      date: 'June 18, 2024',
      content: `Ethereum is a decentralized platform that enables the creation of smart contracts and decentralized applications (dApps). It was proposed in late 2013 by programmer Vitalik Buterin and development began through a Swiss company, Ethereum Switzerland GmbH. Ethereum’s blockchain can run code (smart contracts) and is used for more than just sending cryptocurrency.`,
      link: 'https://en.wikipedia.org/wiki/Ethereum'
    },
    {
      title: 'What is Litecoin?',
      date: 'June 15, 2024',
      content: `Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was an early spinoff of Bitcoin, with its main goal being to improve upon Bitcoin. Litecoin offers faster transaction confirmation times and a different cryptographic algorithm. It’s often considered the silver to Bitcoin’s gold.`,
      link: 'https://en.wikipedia.org/wiki/Litecoin'
    },
    {
      title: 'Introduction to Ripple (XRP)',
      date: 'June 12, 2024',
      content: `Ripple is both a platform and a currency. The Ripple platform is an open-source protocol that is designed to allow fast and cheap transactions. Ripple aims to enable secure, instant, and nearly free global financial transactions of any size with no chargebacks. XRP, the native cryptocurrency of the Ripple network, is often used as a bridge currency to other currencies.`,
      link: 'https://en.wikipedia.org/wiki/Ripple_(payment_protocol)'
    },
    {
      title: 'What is Cardano?',
      date: 'June 10, 2024',
      content: `Cardano is a blockchain platform for smart contracts, similar to Ethereum, with a focus on security through a layered architecture. It was created by Charles Hoskinson, one of the co-founders of Ethereum. The platform's cryptocurrency is called ADA, named after Ada Lovelace, a 19th-century mathematician recognized as the first computer programmer.`,
      link: 'https://en.wikipedia.org/wiki/Cardano_(blockchain_platform)'
    },
    {
      title: 'Exploring Polkadot',
      date: 'June 8, 2024',
      content: `Polkadot is a multi-chain blockchain platform designed to enable different blockchains to interoperate and share information securely and seamlessly. Created by Dr. Gavin Wood, another co-founder of Ethereum, Polkadot aims to solve the problem of blockchain interoperability. Its native cryptocurrency is called DOT.`,
      link: 'https://en.wikipedia.org/wiki/Polkadot_(cryptocurrency)'
    },
    {
      title: 'An Overview of Binance Coin (BNB)',
      date: 'June 5, 2024',
      content: `Binance Coin (BNB) is the cryptocurrency issued by the Binance exchange. Initially created as an ERC-20 token on the Ethereum blockchain, BNB has since moved to Binance's own blockchain called Binance Chain. BNB is used to pay for transactions on the Binance platform, and users can get a discount for using BNB to pay for trading fees.`,
      link: 'https://en.wikipedia.org/wiki/Binance'
    },
    {
      title: 'Understanding Chainlink',
      date: 'June 2, 2024',
      content: `Chainlink is a decentralized oracle network that enables smart contracts on Ethereum to securely connect to external data sources, APIs, and payment systems. This is essential for smart contracts to interact with real-world data. LINK is the cryptocurrency used within the Chainlink network to pay for data services.`,
      link: 'https://en.wikipedia.org/wiki/Chainlink_(blockchain)'
    }
  ];

  return (
    <div className="container">
      <h1 className="header">Crypto Blog</h1>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2 className="title">{post.title}</h2>
          <p className="date"><em>{post.date}</em></p>
          <p className="content">{post.content}</p>
          <a className="read-more" href={post.link} target="_blank" rel="noopener noreferrer">Read more on Wikipedia</a>
        </div>
      ))}
    </div>
  );
}

export default Blog;
