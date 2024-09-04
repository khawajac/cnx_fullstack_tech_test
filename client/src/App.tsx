import React, {useEffect, useState,} from 'react';
import './App.css';

const  App = ()  =>{ 
  const FETCH_INTERVAL = 30000;
  const [loading, setLoading] = useState<Boolean>(false)
  const [serverTime, setSetServerTime] = useState(0)
  const [timeDiff, setTimeDiff] = useState<string>('')
  const [metrics, setMetrics] = useState<String>('')

  const fetchTime = async () => {
    const res = await fetch('http://localhost:8080/time', {
      method: 'GET',
      headers: {
        "Authorization": 'mysecrettoken',       
        "Content-Type":"application/json",
        "Accept": "application/json",
    },
    })

    if(!res.ok) {
      console.error(res.status)
    }

    const timeData = await res.json()
    setSetServerTime(timeData.properties.epoch.description)
  }

  const fetchMetrics = async () => {
    const res = await fetch('http://localhost:8080/metrics', {
      method: 'GET',
      headers: {
        "Authorization": 'mysecrettoken',
      }
    })
    if(!res.ok){
      console.error(res.status)
    }

    const metricsData = await res.text()
    setMetrics(metricsData)
    
  }

  const calculateTimeDifference = () => {
    const currentEpoch = Date.now(); 
    const diff = new Date(currentEpoch - serverTime); 
    setTimeDiff(`${diff.getUTCHours().toString().padStart(2, '0')}:${diff.getUTCMinutes().toString().padStart(2, '0')}:${diff.getUTCSeconds().toString().padStart(2, '0')}`); 
  }

  useEffect(() => {
        fetchTime(); 
        fetchMetrics();

    const fetchInterval = setInterval(() => {
        fetchTime();
    }, FETCH_INTERVAL);

        return () => clearInterval(fetchInterval);
  },[])


  if (loading) { return <div>Loading...</div> }
  
  return (
    <div className="App">
      <div className='grid-container'>
        <div className='grid-content'>
      Server time: {new Date(serverTime).toString()}
      Time Difference:{timeDiff}
    </div>
    <pre className='grid-content'>
      {metrics}
    </pre>
      </div>
    </div>
  );
}

export default App;
