
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
// import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import Refform from './Components/Refform/Refform'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

const handelSubmitup  = (data) =>{
  // e.preventDefault();
  console.log("get data for submit",data);
}

const handelUpdateup = (data) =>{
  console.log( "get data for update", data);
}

function App() {

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <Refform></Refform> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Submit Form'} handelSubmit={handelSubmitup} button={'Submit'}>
        <div>
          <h2>Submit Data Form</h2>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={"Update Form"} handelSubmit={handelUpdateup} button={'Update'}>
        <div>
          <h2>Update Data Form </h2>
        </div>
      </ReusableForm> */}
      <Grandpa></Grandpa>
      
    </>
  )
}

export default App
