import { useContext } from "react";
import { AssetContex } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetContex)
    return (
        <div>
            <h2>Friend</h2>
            <p>{gift}</p>
        </div>
    );
};

export default Friend;