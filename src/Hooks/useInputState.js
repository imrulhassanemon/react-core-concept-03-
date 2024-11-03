import { useState } from "react"

const useInputState = (defaultValue = null) =>{
    const [value, setValue] = useState(defaultValue);


    const handelChange = e => {
        setValue(e.target.value)
    }
    return [value, handelChange]
}

export default useInputState;
 