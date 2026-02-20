import { useEffect, useState } from 'react'
import '../App.css'


function Form() {

  const [inputCity, setInputCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const citiesSC = [
    "Florianópolis",
    "Joinville",
    "Blumenau",
    "Chapecó",
    "Criciúma",
    "Itajaí",
    "Balneário Camboriú",
    "São José",
    "Palhoça",
    "Jaraguá do Sul",
    "Lages",
    "Brusque",
  ];

  useEffect(() =>{
    console.log("Cities atualizadas", cities);
  },[cities]);


  function handleSend() {
    console.log(inputCity);
      if (!citiesSC.includes(inputCity)) return;

    if(citiesSC.includes(inputCity)) {
      setCities(prev => [...prev, inputCity]);
    }

    setInputCity("");
    console.log(cities);

  }

    return (
      <>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <label>City:</label>
          </div>
          <div className='col-8'>
            <input className='form-control' name="city" onChange={(e) => setInputCity(e.target.value)}></input>
            <button onClick={(handleSend)}>Send</button>
          </div>
          { cities.map((city, index) => (
            <div className='col-3' key={index}>
              <p className='fw-bold'>{city}</p>
            </div>
            ))}
        </div>
      </div>
      </>
      
    )
}

export default Form;
