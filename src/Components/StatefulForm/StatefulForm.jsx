

const StatefulForm = () => {

    const handelSubmit = (e) =>{

    }


    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;