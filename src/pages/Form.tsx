import { useEffect, useState } from 'react';
import { useTimer } from '../hooks/useTimer';
import '../App.css'


function Form() {

  const [inputCity, setInputCity] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const {time, isRunning, setIsRunning} = useTimer();
  
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

  const isValidCity = citiesSC.includes(inputCity);

  const suggestions = citiesSC.filter(city => 
    city.toLowerCase().includes(inputCity.toLowerCase())
  );

  useEffect(() =>{
    console.log("Cities atualizadas", cities);
  },[cities]);


  function handleSend() {
    console.log(inputCity);
    if ( !citiesSC.includes(inputCity) || cities.includes(inputCity)
    ) return;

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
          <div className='col-3'>
            Tempo:
          </div>
          <div className='col-9'>
            <p>{time}s</p>
            <button onClick={() =>setIsRunning(prev => !prev)}>
                {isRunning ? "⏸ Pause" : "▶ Play"}
            </button>
          </div>
          <div className='col-2'>
            <label>City:</label>
          </div>
          <div className='col-8 pb-3'>
            <input className='form-control' 
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                onKeyDown={e => {
                  if(e.key == "Enter") handleSend();
                }}
              >
              </input>
              {
                inputCity && (
                  <ul className='list-group'>
                    {
                      suggestions.map((city, key) => (
                        <li key={key}>{city}</li>
                      ))
                    }
                  </ul>
                )
              }
          </div>
          <div className='col-12'>
            <button 
              disabled={!citiesSC.includes(inputCity)}
              onClick={(handleSend)}>
              Send</button>
          </div>
          <div className='col-12'>
            {!isValidCity && inputCity && (
              <small className='text-danger'>Cidade inválida</small>
            )}
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
