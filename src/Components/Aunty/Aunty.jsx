import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [Money, useMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Rony'}></Cousin>
                <Cousin name={'shila'}></Cousin>
            </section>
            <p>Money is: {Money}</p>
            <button onClick={()=> useMoney(Money + 1000)}>Add 1000 money</button>
        </div>
    );
};

export default Aunty;