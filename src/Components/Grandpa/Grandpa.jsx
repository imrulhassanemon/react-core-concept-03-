import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { createContext, useState } from "react";

export const AssetContex = createContext("gold");
export const MoneyContext = createContext(1000)

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "ring from big grandpa";
  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>
      <p>{money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
      <AssetContex.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContex.Provider>
      </MoneyContext.Provider>
    </div>
  );
};
export default Grandpa;

/* 
    * Create a context and export it 
    * Add provider for the context with a value. value could be anything
    * useContext to access value in the contex  API

*/
