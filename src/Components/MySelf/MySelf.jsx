import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div>
            <section><h2>My self</h2></section>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;