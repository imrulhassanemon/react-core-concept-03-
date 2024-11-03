import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    const [name, handelChangeName] = useInputState('konda')

    const handelSubmit = e => {
        e.preventDefault()
        console.log(name);
    }



    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input value={name} onChange={handelChangeName} type="text" name='name'/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" /> <br />
                <input  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;