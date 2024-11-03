// import { useContext } from "react"; 
import Cousin from "../Cousin/Cousin";
import Special from "../Special/Special";
// import { AssetContex } from "../Grandpa/Grandpa";

const Uncle = () => {
    // const gift  = useContext(AssetContex)
    return (
        <div>
            <h2>Uncle</h2>
            <h3></h3>
            <section className="flex">
                <Cousin name={"Rafsan"}>
                    <Special ></Special>
                    </Cousin>
                <Cousin name={"Tuli"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;