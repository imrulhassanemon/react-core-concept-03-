import { useEffect, useRef, useState } from "react";

const Refform = () => {
    const nameRef = useRef(null)
    const emailRef  = useRef(null)
    const passRef = useRef(null)
    const [error, setError] = useState()

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handelSubmit = e  =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value)
       

        if(passRef.current.value.length <= 6){
            setError('Password is less then 6. Your password should be grater than 6')
        }
        else{
            setError('')
             console.log(passRef.current.value)
        }

    }
    return (
        <div>
             <form onSubmit={handelSubmit}>
                <input ref={nameRef}  type="text" name='name'/>
                <br />
                <input ref={emailRef} defaultValue={"imrul@g.com"} type="email" name="email" id="" />
                <br />
                <input ref={passRef}  type="password" name="phone" /> <br />
                <input  type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }

            </form>
        </div>
    );
};

export default Refform;