import { useContext } from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import { AssetContex } from "../Grandpa/Grandpa";



const Dad = ({asset}) => {
    const gift = useContext(AssetContex)
    return (
        <div>
            <h2>Daddy</h2>
            {gift}
            <section className="flex"><MySelf asset={asset}></MySelf>
            <Brother></Brother>
            <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;