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
    headers: { accept: 'application/json', 'x-cg-demo-api-key': '' }
  };

  try {
    const response = await fetch(``, options);
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


