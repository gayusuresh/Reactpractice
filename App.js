import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import validator from 'validator'
import FormSub from './FormSub';
function App() 
{
  /*const [errorMessage, setErrorMessage] = useState('') 
  const validate = (value) => { 
  
    if (validator.isStrongPassword(value, { 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) { 
        setErrorMessage('Is Strong Password') 
    } else { 
        setErrorMessage('Is Not Strong Password') 
    } 
} */


  return (
    <div className="App">
    
<FormSub/>

    </div>
  );
}

export default App;
