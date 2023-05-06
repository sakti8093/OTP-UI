import { useState } from 'react';
import './App.css';
import PopUp from './components/PopUp';



function App() {

  const [phone,setPhone] = useState('')
  const [togglePop,setPop] = useState(false);

  const handleChange = (e) =>{
    setPhone(e.target.value);
  }

  console.log(phone);

  const showPop = ()=>{
    setPop(true)
  }

  const hidePop = ()=>{
    setPop(false)
  }

  return (
  <div>
    <div className='container' >
        <h4>Enter Phone Number</h4>
        <input value={phone} type='tel' maxLength='10' onChange={(e)=>handleChange(e)} />
        <p>Please enter a 10 digit number</p>
        <button onClick={()=>showPop()} disabled={phone.length<10} >Verify</button>
    </div>
    { togglePop && < PopUp phone={phone} hidePop={hidePop} /> }
  </div>
  );
}

export default App;
