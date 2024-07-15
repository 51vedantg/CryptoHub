import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (probs) => {

    const [allCoin , setAllCoin] = useState([]);
    
    const[currency , setCurrency] = useState({
        name:"usd",
        symbol:"$",
    });

   const fetchAllCoin = async () => {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-4cM2aEftnoH9DZughfBy5LHe' }
  };

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
    const data = await response.json();
    setAllCoin(data);
  } catch (err) {
    console.error(err);
  }
}


    useEffect(() => {
        fetchAllCoin();
    },[currency]);



    const contextValue = {
        allCoin , currency , setCurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {probs.children}
        </CoinContext.Provider>
    )

}


export default CoinContextProvider;


