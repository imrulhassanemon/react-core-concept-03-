import { useState } from "react";


const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setNaem] = useState(null);
    const [error, setError] = useState()

    const handelPasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handelEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    
    const handelNameChange = (e) =>{
        setNaem(e.target.value)
    }
    
    const handelSubmit = (e) =>{
        e.preventDefault()

        if(password.length <6){
            setError("password should be 6 character or longer. ")
        }
        else{
            setError('')
            console.log(email);
            console.log(password);
            console.log(name);
        }

        
    }


    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input onChange={handelNameChange} type="text" name="name" />
                <br />
                <input onChange={handelEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handelPasswordChange} type="password" name="password" />
                {
                    error && <p>{error}</p>
                }
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;