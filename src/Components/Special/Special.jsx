import { useContext } from "react";
import { AssetContex } from "../Grandpa/Grandpa";

const Special = ({asset}) => {

    const gift = useContext(AssetContex)

    return (
        <div>
            <h2>Special One</h2>
            <p>{asset}</p>
            {gift}
            
        </div>
    );
};

export default Special;