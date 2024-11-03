import { useContext } from "react";
import { AssetContex, MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const gift = useContext(AssetContex)
    const money = useContext(MoneyContext)
    return (
        <div>
            <h2>
                Brother
            </h2>
            <p>{gift}</p>
            <p>Grandpa money : {money}</p>
        </div>
    );
};

export default Brother;