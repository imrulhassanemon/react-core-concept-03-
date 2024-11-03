

const ReusableForm = ({formTitle, button, handelSubmit, children}) => {

    const handelGetdata = (e) =>{
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handelSubmit(data)
    }
    
    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handelGetdata}>
                <input type="text" name='name'/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" /> <br />
                <input  type="submit" value={button} />
            </form>
        </div>
    );
};

export default ReusableForm;